import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product);

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


  const resolveImage = (p) => {
    if (!p) return "/placeholder.png";
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
    let first = flat[0] || null;
    if (!first) return "/placeholder.png";
    if (first.startsWith("/"))
      return `${axiosClient.defaults.baseURL.replace(/\/$/, "")}${first}`;
    if (/^https?:\/\//.test(first)) return first;
    return `${axiosClient.defaults.baseURL.replace(/\/$/, "")}/${first}`;
  };

  const img = resolveImage(product);

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-600"
      >
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg">
          <div className="h-80 flex items-center justify-center mb-4 bg-gray-50 rounded-md overflow-hidden">
            <img
              src={img}
              alt={product.title}
              className="object-contain h-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#0b2559] mb-2">
            {product.title}
          </h1>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <div className="prose max-w-none">
            <h3>Details</h3>
            <p>{product.description || "No description provided."}</p>
            <ul>
              {product.features &&
                product.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        <aside className="bg-white p-6 rounded-lg">
          <div className="mb-4">
            <button className="w-full bg-orange-500 text-white py-2 rounded-md">
              Buy Now
            </button>
          </div>
          <div className="mb-4">
            <button className="w-full border border-gray-200 py-2 rounded-md">
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
