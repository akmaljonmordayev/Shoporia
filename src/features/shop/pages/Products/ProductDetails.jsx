import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";
import { addToCartLocal } from "../../utils/cart";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);
  const [allProducts, setAllProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("technical");
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const response = await axiosClient.get("/typeOfElectronics");
          const all = [];
          if (response[0]) {
            Object.keys(response[0]).forEach((category) => {
              if (Array.isArray(response[0][category])) {
                response[0][category].forEach((p, idx) => {
                  all.push({
                    ...p,
                    id: p.id || `${category}-${idx}`,
                    category,
                  });
                });
              }
            });
          }

          setAllProducts(all);

          const found = all.find((p) => {
            if (String(p.id) === String(id)) return true;
            if (p.slug && String(p.slug) === String(id)) return true;
            if (
              p.title &&
              p.title.toLowerCase().replace(/\s+/g, "-") === String(id)
            )
              return true;
            return false;
          });
          setProduct(found || null);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, product]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!product) return <div className="p-8">Product not found</div>;

  const resolveImages = (p) => {
    if (!p) return [];
    const candidates = [];

    if (p.image) {
      if (typeof p.image === "object") {
        if (p.image.main) candidates.push(p.image.main);
        if (Array.isArray(p.image.images)) candidates.push(...p.image.images);
      } else {
        candidates.push(p.image);
      }
    }

    if (Array.isArray(p.images)) candidates.push(...p.images);
    if (Array.isArray(p.gallery)) candidates.push(...p.gallery);
    if (p.picture) candidates.push(p.picture);

    const flat = candidates
      .map((c) => {
        if (!c) return null;
        if (typeof c === "string") return c;
        if (typeof c === "object")
          return c.url || c.src || c.path || c.name || null;
        return null;
      })
      .filter(Boolean);

    return flat.map((first) => {
      if (first.startsWith("/"))
        return `${axiosClient.defaults.baseURL.replace(/\/$/, "")}${first}`;
      if (/^https?:\/\//.test(first)) return first;
      return `${axiosClient.defaults.baseURL.replace(/\/$/, "")}/${first}`;
    });
  };

  const images = resolveImages(product);
  const mainImg = images[mainImageIndex] || images[0] || "/placeholder.png";

  const similarProducts = allProducts.filter(
    (p) =>
      p.category === product.category && String(p.id) !== String(product.id)
  );

  const handleAddAndGoToCart = () => {
    addToCartLocal(product);
    navigate("/cart");
  };

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-600"
      >
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <div className="h-96 flex items-center justify-center mb-4 bg-gray-50 rounded-md overflow-hidden">
                <img
                  src={mainImg}
                  alt={product.title}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex gap-3">
                {images.length > 0 ? (
                  images.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMainImageIndex(idx)}
                      className={`w-20 h-16 rounded-md overflow-hidden border ${
                        idx === mainImageIndex
                          ? "border-blue-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`thumb-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))
                ) : (
                  <div className="text-gray-500">No images</div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl font-bold text-[#0b2559] mb-2">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                {product.star && (
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.852L19.335 24 12 20.201 4.665 24 6 15.6 0 9.748l8.332-1.73z"></path>
                    </svg>
                    <span className="font-medium">{product.star}</span>
                  </div>
                )}
                {product.inStock && (
                  <span className="text-sm text-green-600">In Stock</span>
                )}
                {product.guaranteed && (
                  <span className="text-sm text-gray-600">Guaranteed</span>
                )}
                {product.freeDelivery && (
                  <span className="text-sm text-gray-600">Free Delivery</span>
                )}
              </div>

              <p className="text-lg font-semibold mb-4">${product.price}</p>

              <div className="prose max-w-none mb-6">
                <h3>Overview</h3>
                <p>{product.description || "No description provided."}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key specs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {product.brand && (
                    <li>
                      <strong>Brand:</strong> {product.brand}
                    </li>
                  )}
                  {product.model && (
                    <li>
                      <strong>Model:</strong> {product.model}
                    </li>
                  )}
                  {product.screenSize && (
                    <li>
                      <strong>Screen Size:</strong> {product.screenSize}
                    </li>
                  )}
                  {product.processor && (
                    <li>
                      <strong>Processor:</strong> {product.processor}
                    </li>
                  )}
                  {product.ram && (
                    <li>
                      <strong>RAM:</strong> {product.ram} GB
                    </li>
                  )}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => alert("Buy Now clicked")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={handleAddAndGoToCart}
                    className="btn-primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white">
            <div className="border-b">
              <nav className="flex gap-6 px-2">
                <button
                  onClick={() => setActiveTab("technical")}
                  className={`py-3 ${
                    activeTab === "technical"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Technical Details
                </button>
                <button
                  onClick={() => setActiveTab("similar")}
                  className={`py-3 ${
                    activeTab === "similar"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Similar Products
                </button>
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`py-3 ${
                    activeTab === "comments"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Comments
                </button>
              </nav>
            </div>

            <div className="p-4">
              {activeTab === "technical" && (
                <div>
                  <h4 className="font-semibold mb-3">Technical Details</h4>
                  <table className="w-full text-sm text-left">
                    <tbody>
                      <tr>
                        <td className="py-2 text-gray-600">Display</td>
                        <td className="py-2">{product.screenSize || "-"}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Graphics</td>
                        <td className="py-2">{product.graphics || "-"}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Processor</td>
                        <td className="py-2">{product.processor || "-"}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">In the box</td>
                        <td className="py-2">{product.inBox || "-"}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Height</td>
                        <td className="py-2">{product.height || "-"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "similar" && (
                <div>
                  <h4 className="font-semibold mb-3">Similar Products</h4>
                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {similarProducts.length > 0 ? (
                      similarProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() =>
                            navigate(`/products/${p.id}`, {
                              state: { product: p },
                            })
                          }
                          className="w-44 bg-white border rounded-md p-2 shrink-0 cursor-pointer"
                        >
                          <img
                            src={resolveImages(p)[0] || "/placeholder.png"}
                            alt={p.title}
                            className="w-full h-28 object-cover mb-2"
                          />
                          <div className="text-xs font-medium">{p.title}</div>
                          <div className="text-sm font-semibold">
                            ${p.price}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">No similar products</div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "comments" && (
                <div>
                  <h4 className="font-semibold mb-3">Comments</h4>
                  <div className="text-sm text-gray-600">No comments yet.</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="bg-white p-6 rounded-lg lg:sticky top-24">
          <div className="text-sm text-gray-500">Price</div>
          <div className="text-2xl font-bold text-[#0b2559] mb-2">
            ${product.price}
          </div>
          {product.discount && (
            <div className="text-sm text-red-500 mb-2">
              -{product.discount}%
            </div>
          )}

          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-2 block">
              Payment option
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="pay" defaultChecked /> Pay Now
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="pay" /> Buy in installments
              </label>
            </div>
          </div>

          <div className="mb-4">
            <button
              onClick={() => alert("Buy Now clicked")}
              className="w-full bg-blue-600 text-white py-2 rounded-md mb-2"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddAndGoToCart}
              className="w-full btn-primary py-2 rounded-md"
            >
              Add to cart
            </button>
          </div>

          <div className="text-sm text-gray-600">
            Category: {product.category}
          </div>
          <div className="text-sm text-gray-600">Brand: {product.brand}</div>
        </aside>
      </div>
    </div>
  );
}

export default ProductDetails;
