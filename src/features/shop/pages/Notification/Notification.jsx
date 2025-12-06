import React from "react";
import { FiMail, FiSmartphone, FiPackage, FiRefreshCw } from "react-icons/fi";

function Notification() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold mb-2">Notification</h2>
      <p className="text-gray-500 mb-8">Manage your notification settings</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex items-start gap-4">
          <FiMail className="w-6 h-6 text-gray-700" />
          <div className="flex-1">
            <h3 className="font-medium">Emails</h3>
            <p className="text-gray-500 text-sm">
              We write emails to let you know what's important, like: new order,
              confirmations
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div
              className="
    w-11 h-6 bg-gray-300 rounded-full
    peer-checked:bg-blue-600 transition-all duration-300
  "
            ></div>

            <div
              className="
    absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all 
    peer-checked:translate-x-5
  "
            ></div>
          </label>
        </div>

        <div className="flex items-start gap-4">
          <FiPackage className="w-6 h-6 text-gray-700" />
          <div className="flex-1">
            <h3 className="font-medium">Order Delivered</h3>
            <p className="text-gray-500 text-sm">
              You will be noticed once the order is delivered
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div
              className="
    w-11 h-6 bg-gray-300 rounded-full
    peer-checked:bg-blue-600 transition-all duration-300
  "
            ></div>

            <div
              className="
    absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all 
    peer-checked:translate-x-5
  "
            ></div>
          </label>
        </div>

        <div className="flex items-start gap-4">
          <FiSmartphone className="w-6 h-6 text-gray-700" />
          <div className="flex-1">
            <h3 className="font-medium">Push to your Device</h3>
            <p className="text-gray-500 text-sm">
              Receive notifications about your order status, promotions and
              other updates
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div
              className="
    w-11 h-6 bg-gray-300 rounded-full
    peer-checked:bg-blue-600 transition-all duration-300
  "
            ></div>

            <div
              className="
    absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all 
    peer-checked:translate-x-5
  "
            ></div>
          </label>
        </div>

        <div className="flex items-start gap-4">
          <FiRefreshCw className="w-6 h-6 text-gray-700" />
          <div className="flex-1">
            <h3 className="font-medium">Product's availability</h3>
            <p className="text-gray-500 text-sm">
              You will be noticed when product gets available
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div
              className="
    w-11 h-6 bg-gray-300 rounded-full
    peer-checked:bg-blue-600 transition-all duration-300
  "
            ></div>

            <div
              className="
    absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all 
    peer-checked:translate-x-5
  "
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Notification;
