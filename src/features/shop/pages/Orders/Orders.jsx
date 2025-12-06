import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import orderList from "./img/orderPict.png";
import useGetAll from "../../../../hooks/UseGetAll"

function Orders() {
  const [activeTab, setActiveTab] = useState("delivered");

  const tabs = [
    { key: "current", label: "Current" },
    { key: "delivered", label: "Delivered" },
    { key: "canceled", label: "Canceled" },
    { key: "returned", label: "Returned" },
  ];

  const { data, isLoading } = useGetAll(
    `/orders?status=${activeTab}`,
    ["orders", activeTab]
  );

  const orders = data?.data || [];

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-900">Order History</h1>
      <p className="text-gray-500 mb-6">Track, return or purchase items</p>

      <div className="flex items-center gap-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              relative pb-2 text-[15px] transition
              ${activeTab === tab.key ? "text-blue-600 font-medium" : "text-gray-500"}
            `}
          >
            {tab.label}
            <span className="ml-1 text-gray-400">{activeTab === tab.key ? orders.length : 0}</span>

            {activeTab === tab.key && (
              <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {!isLoading && orders.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            src={orderList}
            className="w-[200px] h-auto mb-4 opacity-90"
          />
          <p className="text-gray-500 text-[15px]">
            You have not placed any orders yet
          </p>
        </div>
      )}

      <div className="flex flex-col gap-6 mt-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-xl p-5"
          >
            <div className="grid grid-cols-5 items-center text-[14px] text-gray-600 mb-3">
              <div>
                <p className="font-medium text-gray-500">order code</p>
                <p className="font-semibold text-gray-900">{order.code}</p>
              </div>

              <div>
                <p className="font-medium text-gray-500">Placed on</p>
                <p className="text-gray-900">{order.date}</p>
              </div>

              <div>
                <p className="font-medium text-gray-500">Total</p>
                <p className="font-semibold text-gray-900">${order.total}</p>
              </div>

              <div>
                <p className="font-medium text-gray-500">Delivered</p>
                <p className="text-gray-900">{order.deliveredDate}</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-500">Sent to</p>
                  <p className="text-gray-900">{order.customer}</p>
                </div>

                <IoIosArrowDown size={18} className="text-gray-500" />
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {order.items.slice(0, 5).map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  className="w-20 h-20 rounded-xl object-cover border border-gray-200"
                />
              ))}

              {order.items.length > 5 && (
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-xl text-gray-600 text-[16px] border border-gray-300">
                  +{order.items.length - 5}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
