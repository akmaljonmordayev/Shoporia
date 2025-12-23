import React, { useEffect, useState } from "react";
import { getCart, saveCart, clearCart } from "../../utils/cart";
import { useNavigate } from "react-router-dom";
import { HiOutlineTruck } from "react-icons/hi";

function Checkout() {
  const [cart, setCart] = useState({ items: [] });
  const [shippingMethod, setShippingMethod] = useState("express");
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const subtotal = (cart.items || []).reduce((s, it) => {
    const raw = Number(it.product?.price || 0);
    const disc = Number(it.product?.discount || 0);
    const price = disc ? Math.round(raw * (1 - disc / 100)) : raw;
    return s + price * (it.quantity || 1);
  }, 0);

  const discount = (cart.items || []).reduce((d, it) => {
    const raw = Number(it.product?.price || 0);
    const disc = Number(it.product?.discount || 0);
    if (disc) return d + Math.round((raw * disc) / 100) * (it.quantity || 1);
    return d;
  }, 0);

  const shippingCost =
    shippingMethod === "free" ? 0 : shippingMethod === "regular" ? 7.5 : 22.5;
  const grandTotal = subtotal - discount + shippingCost;

  const handleContinue = () => {
    // save chosen shipping so Payment page can read it (simple store in localStorage)
    const ctx = {
      shippingMethod,
    };
    localStorage.setItem("shop_checkout_ctx", JSON.stringify(ctx));
    navigate("/payment");
  };

  if (!cart.items || cart.items.length === 0)
    return (
      <div className="p-12">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          No products found.
        </div>
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-8 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-semibold">
            1
          </div>
          <div className="text-sm text-gray-400">cart</div>
        </div>
        <div className="h-px w-20 bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
            2
          </div>
          <div className="text-sm text-blue-600">Checkout</div>
        </div>
        <div className="h-px w-20 bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-semibold">
            3
          </div>
          <div className="text-sm text-gray-400">Payment</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg">
          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-600">User</label>
              <input
                className="w-full mt-2 p-3 border rounded-md"
                defaultValue="Jimmy Smith"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Ship to</label>
              <textarea className="w-full mt-2 p-3 border rounded-md">
                HubSpot, 25 First Street, Cambridge MA 02141, United States
              </textarea>
            </div>

            <div>
              <label className="text-sm text-gray-600">Shiping Method</label>
              <div className="mt-3 space-y-3">
                <label
                  className={`flex items-center gap-3 p-3 border rounded-md ${
                    shippingMethod === "free"
                      ? "bg-gray-50 border-blue-200"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="ship"
                    value="free"
                    checked={shippingMethod === "free"}
                    onChange={() => setShippingMethod("free")}
                  />
                  <div className="flex-1 text-sm">
                    Free Shipping{" "}
                    <div className="text-xs text-gray-500">
                      7-30 business days
                    </div>
                  </div>
                  <div>$0</div>
                </label>
                <label
                  className={`flex items-center gap-3 p-3 border rounded-md ${
                    shippingMethod === "regular"
                      ? "bg-gray-50 border-blue-200"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="ship"
                    value="regular"
                    checked={shippingMethod === "regular"}
                    onChange={() => setShippingMethod("regular")}
                  />
                  <div className="flex-1 text-sm">
                    Regular Shipping{" "}
                    <div className="text-xs text-gray-500">
                      3-14 business days
                    </div>
                  </div>
                  <div>$7.50</div>
                </label>
                <label
                  className={`flex items-center gap-3 p-3 border rounded-md ${
                    shippingMethod === "express"
                      ? "bg-gray-50 border-blue-200"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="ship"
                    value="express"
                    checked={shippingMethod === "express"}
                    onChange={() => setShippingMethod("express")}
                  />
                  <div className="flex-1 text-sm">
                    Express Shipping{" "}
                    <div className="text-xs text-gray-500">
                      1-3 business days
                    </div>
                  </div>
                  <div>$22.50</div>
                </label>
              </div>
            </div>

            <div>
              <button onClick={() => navigate(-1)} className="text-blue-600">
                Return to cart
              </button>
            </div>
          </div>
        </div>

        <aside className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-sm text-gray-500">Your Order</div>
          <div className="space-y-4 mt-4">
            {(cart.items || []).map((it) => (
              <div key={it.productId} className="flex items-start gap-3">
                <img
                  src={
                    it.product?.image?.main ||
                    it.product?.image ||
                    it.product?.images?.[0] ||
                    "/placeholder.png"
                  }
                  className="w-14 h-14 object-contain rounded"
                />
                <div className="flex-1 text-sm">
                  <div className="font-medium line-clamp-2">
                    {it.product?.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    x{it.quantity || 1}
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  ${it.product?.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <input
              placeholder="discount code"
              className="w-full p-2 border rounded-md"
            />
            <button className="mt-2 w-full border rounded-md py-2">
              Apply
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <div className="flex justify-between">
              Subtotal <div>${subtotal.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              Discount <div>-${discount.toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              Shipment cost <div>${shippingCost.toFixed(2)}</div>
            </div>
          </div>

          <div className="border-t pt-4 flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">Grand Total</div>
            <div className="text-xl font-bold">${grandTotal.toFixed(2)}</div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Continue to pay
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
