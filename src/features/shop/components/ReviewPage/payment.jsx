import React from "react";

const items = [
  {
    id: 1,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01JCB0S1XJRCSEZHMT4Q5632P6.svg",
  },
  {
    id: 2,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01J87FHPFG9BWZ0M9THC1YD8GS.svg",
  },
  {
    id: 3,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01J4A0X6VZ6C0Y460QS0N0571R.svg",
  },
  {
    id: 4,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01J87ERV9GK1MYM2XR63WEXX0X.svg",
  },
  {
    id: 5,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01J87FCBNSAQCNC59S7VQB3SAH.svg",
  },
  {
    id: 6,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01KATT7K8TEKJ2291P88S399W2.svg",
  },
  {
    id: 7,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01KATV61HZZGCND193HJXFZQ1B.png",
  },
  {
    id: 8,
    logo: "https://cdn.mediapark.uz/mono/payment-methods/01J4786G77T9F61G4A33H4K69E.svg",
  },
];

function Payment() {
  return (
    <div className="w-[300px] bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-2">
      <div className="w-full h-2 bg-gray-100 mb-2" />
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="
              flex items-center justify-between 
              p-3 bg-gray-50 hover:bg-gray-100 
              rounded-lg border border-transparent
              hover:border-red-500 cursor-pointer 
              transition-all duration-200
            "
          >
            <img src={item.logo} className="w-auto h-auto max-h-[20px]" alt="logo" />

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;
