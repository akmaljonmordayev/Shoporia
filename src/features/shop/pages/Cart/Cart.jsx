import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, saveCart, clearCart } from "../../utils/cart";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { HiOutlineTruck } from "react-icons/hi";
import axiosClient from "../../../../api/axiosClient";

function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const resp = await axiosClient.get("/typeOfElectronics");
        const all = [];
        if (resp[0]) {
          Object.keys(resp[0]).forEach((cat) => {
            if (Array.isArray(resp[0][cat])) {
              resp[0][cat].forEach((p, idx) => {
                all.push({ ...p, id: p.id || `${cat}-${idx}`, category: cat });
              });
            }
          });
        }
        // pick first 6 recommendations
        setRecommendations(all.slice(0, 6));
      } catch (err) {
        console.error("Error loading recommendations", err);
      }
    };
    fetchRecommendations();
  }, []);

  const persistCart = (next) => {
    saveCart(next);
    setCart(next);
  };

  const handleRemove = (productId) => {
    const updated = removeFromCart(productId);
    setCart(updated);
  };

  const changeQuantity = (productId, delta) => {
    const next = { ...getCart() };
    next.items = (next.items || []).map((it) => {
      if (String(it.productId) === String(productId)) {
        const newQty = Math.max(1, (it.quantity || 1) + delta);
        return { ...it, quantity: newQty };
      }
      return it;
    });
    persistCart(next);
  };

  const calcItemPrice = (it) => {
    const raw = Number(it.product?.price || 0);
    const discount = Number(it.product?.discount || 0);
    if (discount) return Math.round(raw * (1 - discount / 100));
    return raw;
  };

  const subtotal = (cart.items || []).reduce(
    (s, it) => s + calcItemPrice(it) * (it.quantity || 1),
    0
  );
  const discount = (cart.items || []).reduce((d, it) => {
    const raw = Number(it.product?.price || 0);
    const disc = Number(it.product?.discount || 0);
    if (disc) return d + Math.round((raw * disc) / 100) * (it.quantity || 1);
    return d;
  }, 0);
  const shipping = subtotal > 0 ? 22.5 : 0;
  const grandTotal = subtotal - discount + shipping;

  const handleProceed = () => {
    // create an order locally and move to Orders page
    try {
      const current = getCart();
      if (!current.items || current.items.length === 0) return;

      const orderItems = current.items.map((it) => ({
        id: it.productId,
        title: it.product?.title || "",
        image:
          it.product?.image?.main ||
          it.product?.image ||
          (it.product?.images || [])[0] ||
          "/placeholder.png",
        price: it.product?.price || 0,
        quantity: it.quantity || 1,
      }));

      const subtotal = orderItems.reduce(
        (s, it) => s + Number(it.price || 0) * (it.quantity || 1),
        0
      );
      const orderTotal = subtotal; // you can include shipping/discount as needed

      const newOrder = {
        id: `local_${Date.now()}`,
        code: `ORD${Date.now()}`,
        date: new Date().toLocaleString(),
        total: orderTotal,
        deliveredDate: "",
        customer: "You",
        status: "current",
        items: orderItems,
      };

      // save to local orders list
      const raw = localStorage.getItem("shop_orders_v1");
      const existing = raw ? JSON.parse(raw) : [];
      existing.unshift(newOrder);
      localStorage.setItem("shop_orders_v1", JSON.stringify(existing));

      // clear cart
      clearCart();
      setCart({ items: [] });

      // go to orders page
      navigate("/orders");
    } catch (err) {
      console.error("Error creating order:", err);
      alert("Could not create order");
    }
  };

  if (!cart.items || cart.items.length === 0)
    return (
      <div className="p-12">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          Your cart is empty
        </div>
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {(cart.items || []).map((it) => {
            const itemPrice = calcItemPrice(it);
            return (
              <div
                key={it.productId}
                className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6"
              >
                <div className="w-28 h-28 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={
                      it.product?.image?.main ||
                      it.product?.image ||
                      it.product?.images?.[0] ||
                      "/placeholder.png"
                    }
                    alt={it.product?.title || it.productId}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-lg">
                        {it.product?.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-2 flex gap-3">
                        {it.product?.color && (
                          <div className="text-xs text-gray-600">
                            {it.product.color}
                          </div>
                        )}
                        {it.product?.freeDelivery && (
                          <div className="text-xs text-blue-600 flex items-center gap-1">
                            🚚 Free Delivery
                          </div>
                        )}
                        {it.product?.guaranteed && (
                          <div className="text-xs text-green-600">
                            ✓ Guaranteed
                          </div>
                        )}
                        {it.product?.inStock && (
                          <div className="text-xs text-purple-600">
                            In Stock
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 line-through">
                        ${it.product?.price}
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        ${itemPrice}.00
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 border rounded-lg px-2 py-1">
                      <button
                        onClick={() => changeQuantity(it.productId, -1)}
                        className="p-1 text-gray-600 hover:text-gray-800"
                      >
                        <AiOutlineMinus />
                      </button>
                      <div className="px-3">{it.quantity}</div>
                      <button
                        onClick={() => changeQuantity(it.productId, 1)}
                        className="p-1 text-gray-600 hover:text-gray-800"
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <button
                        onClick={() => handleRemove(it.productId)}
                        className="flex items-center gap-2 text-red-500 hover:underline"
                      >
                        <AiOutlineDelete /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-4 p-4 bg-white rounded-lg border">
            <h3 className="font-semibold mb-2">
              Customers who viewed items in your browsing history also viewed
            </h3>
            <div className="flex gap-4 overflow-x-auto py-2">
              {recommendations.length > 0 ? (
                recommendations.map((p) => (
                  <div
                    key={p.id}
                    onClick={() =>
                      navigate(`/products/${p.id}`, { state: { product: p } })
                    }
                    className="w-40 bg-white rounded-lg shadow p-3 shrink-0 cursor-pointer"
                  >
                    <div className="h-24 bg-gray-50 rounded mb-2 overflow-hidden flex items-center justify-center">
                      <img
                        src={
                          p.image?.main ||
                          p.image ||
                          p.images?.[0] ||
                          "/placeholder.png"
                        }
                        alt={p.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-700 line-clamp-2">
                      {p.title}
                    </div>
                    <div className="font-semibold mt-1">${p.price}</div>
                  </div>
                ))
              ) : (
                <>
                  <div className="w-40 bg-white rounded-lg shadow p-3 shrink-0">
                    <div className="h-24 bg-gray-50 rounded mb-2" />
                    <div className="text-xs text-gray-700">Sample product</div>
                    <div className="font-semibold mt-1">$249.00</div>
                  </div>
                  <div className="w-40 bg-white rounded-lg shadow p-3 shrink-0">
                    <div className="h-24 bg-gray-50 rounded mb-2" />
                    <div className="text-xs text-gray-700">Sample product</div>
                    <div className="font-semibold mt-1">$199.00</div>
                  </div>
                  <div className="w-40 bg-white rounded-lg shadow p-3 shrink-0">
                    <div className="h-24 bg-gray-50 rounded mb-2" />
                    <div className="text-xs text-gray-700">Sample product</div>
                    <div className="font-semibold mt-1">$99.00</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <aside className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <HiOutlineTruck className="text-blue-600" />
            <div className="text-sm text-gray-600">Payment Details</div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <div>Subtotal</div>
            <div>${subtotal.toFixed(2)}</div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <div>Discount</div>
            <div>-${discount.toFixed(2)}</div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <div>Shipment cost</div>
            <div>${shipping.toFixed(2)}</div>
          </div>

          <div className="border-t pt-4 flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">Grand Total</div>
            <div className="text-xl font-bold text-gray-900">
              ${grandTotal.toFixed(2)}
            </div>
          </div>

          <button
            onClick={handleProceed}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Order
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
