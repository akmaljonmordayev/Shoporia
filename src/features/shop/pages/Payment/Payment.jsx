import React, { useEffect, useState } from "react";
import { getCart, clearCart } from "../../utils/cart";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [cart, setCart] = useState({ items: [] });
  const [ctx, setCtx] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
    try {
      const raw = localStorage.getItem("shop_checkout_ctx");
      if (raw) setCtx(JSON.parse(raw));
    } catch (e) {}
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
    ctx.shippingMethod === "free"
      ? 0
      : ctx.shippingMethod === "regular"
      ? 7.5
      : 22.5;
  const grandTotal = subtotal - discount + shippingCost;

  const handlePay = () => {
    // mock payment success
    clearCart();
    navigate("/");
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
          <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-semibold">
            2
          </div>
          <div className="text-sm text-gray-400">Checkout</div>
        </div>
        <div className="h-px w-20 bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
            3
          </div>
          <div className="text-sm text-blue-600">Payment</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Payment</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 p-3 border rounded-md">
              <input type="radio" name="pay" defaultChecked />
              <div className="flex-1 text-sm">Credit Cards</div>
            </label>
            <label className="flex items-center gap-3 p-3 border rounded-md">
              <input type="radio" name="pay" />
              <div className="flex-1 text-sm">PayPal</div>
            </label>

            <div className="mt-6">
              <div className="text-sm text-gray-600 mb-2">Billing address</div>
              <input
                className="w-full p-3 border rounded-md"
                defaultValue="Same as shipping address"
              />
            </div>

            <div className="mt-6">
              <button onClick={() => navigate(-1)} className="text-blue-600">
                Return to checkout
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
            onClick={handlePay}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Continue to pay
          </button>
        </aside>
      </div>
    </div>
  );
}

export default Payment;
