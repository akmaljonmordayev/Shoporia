import React, { useState, useEffect } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import Container from "../../components/Container/Container";
import axiosClient from "../../../../api/axiosClient";
import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosClient.get("/typeOfElectronics");
        const allProducts = [];
        if (response[0]) {
          Object.keys(response[0]).forEach((category) => {
            if (Array.isArray(response[0][category])) {
              response[0][category].forEach((product, index) => {
                allProducts.push({
                  ...product,
                  id: product.id || `${category}-${index}`,
                  category: category,
                });
              });
            }
          });
        }

        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().startsWith(query) ||
          product.title.toLowerCase().includes(query) ||
          product.brand?.toLowerCase().startsWith(query) ||
          product.brand?.toLowerCase().includes(query)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand?.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedFeatures.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedFeatures.every((feature) => {
          switch (feature) {
            case "guaranteed":
              return product.guaranteed === true;
            case "freeDelivery":
              return product.freeDelivery === true;
            case "inStock":
              return product.inStock === true;
            default:
              return true;
          }
        });
      });
    }

    switch (sortBy) {
      case "priceLow":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => (b.star || 0) - (a.star || 0));
        break;
      case "latest":
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [
    products,
    selectedBrands,
    priceRange,
    selectedFeatures,
    sortBy,
    searchQuery,
  ]);

  const handleBrandChange = (brand) => {
    const normalized = typeof brand === "string" ? brand.toLowerCase() : brand;
    setSelectedBrands((prev) =>
      prev.includes(normalized)
        ? prev.filter((b) => b !== normalized)
        : [...prev, normalized]
    );
  };

  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = async (productId) => {
    try {
      console.log("Adding to cart, productId:", productId);

      const response = await axiosClient.get("/carts");
      console.log("Cart response:", response);

      let cart = response[0] || { id: 1, userId: 1, items: [] };
      console.log("Current cart:", cart);

      const existingItem = cart.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
        console.log("Updated quantity for product:", productId);
      } else {
        cart.items.push({ productId, quantity: 1 });
        console.log("Added new product to cart:", productId);
      }

      console.log("Cart before update:", cart);

      const patchResponse = await axiosClient.patch(`/carts/${cart.id}`, {
        items: cart.items,
      });
      console.log("Cart updated successfully:", patchResponse);

      alert(`Product added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding to cart. Check console.");
    }
  };

  const uniqueBrands = [
    ...new Set(products.map((p) => p.brand?.toLowerCase()).filter(Boolean)),
  ];

  return (
    <Container>
      <div className="flex gap-6 py-8">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-40 flex items-center gap-2"
        >
          <FiFilter size={20} />
        </button>
        <div className="lg:hidden">
          <ProductSidebar
            brands={uniqueBrands}
            selectedBrands={selectedBrands}
            onBrandChange={handleBrandChange}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            selectedFeatures={selectedFeatures}
            onFeatureChange={handleFeatureChange}
            sidebarOpen={sidebarOpen}
            onCloseSidebar={() => setSidebarOpen(false)}
          />
        </div>
        <div className="hidden lg:block w-80 sticky top-20 self-start h-[calc(100vh-5rem)] overflow-auto pr-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4">
              <input
                type="text"
                placeholder="🔍 Search products by name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:shadow-md hover:shadow-sm transition duration-150"
              />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 hover:shadow-sm transition duration-150"
              >
                <option value="latest">Latest</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>

            <div className="mb-4 flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedBrands([]);
                  setPriceRange([0, 2500]);
                  setSelectedFeatures([]);
                  setSearchQuery("");
                  setSortBy("latest");
                }}
                className="text-sm text-white bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-2 rounded-md transition"
              >
                Clear filters
              </button>
            </div>

            <ProductSidebar
              brands={uniqueBrands}
              selectedBrands={selectedBrands}
              onBrandChange={handleBrandChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedFeatures={selectedFeatures}
              onFeatureChange={handleFeatureChange}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <div className="mb-4 lg:hidden">
              <input
                type="text"
                placeholder="🔍 Search products by name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:shadow-md hover:shadow-sm transition duration-150"
              />
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-[#0b2559]">
                Products ({filteredProducts.length})
              </h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600 lg:hidden"
              >
                <option value="latest">Latest</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-gray-500">Loading products...</div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-gray-500">No products found</div>
            </div>
          ) : (
            <div
              key={
                filteredProducts.map((p) => p.id).join("_") || "products-grid"
              }
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={() => toggleWishlist(product.id)}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Product;
