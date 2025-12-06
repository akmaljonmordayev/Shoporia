      import React from "react";

      export default function Loader() {
        return (
          <div className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden">
        
            <div
              aria-hidden="true"
              className="absolute rounded-full blur-3xl opacity-70"
              style={{
                width: "360px",
                height: "360px",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(125,211,252,0.45), rgba(59,130,246,0.18) 30%, rgba(251,146,60,0.08) 55%, transparent 70%)",
                filter: "blur(36px)",
                transform: "scale(1.05)",
                zIndex: 0,
              }}
            />

        
            <div
              className="relative flex items-center justify-center"
              style={{ width: 220, height: 220, zIndex: 1 }}
            >
              <div
                className="w-full h-full rounded-full p-[8px] bg-transparent"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7dd3fc, #0ea5e9 25%, #0f172a 55%, #fb923c 85%, #7dd3fc 100%)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "8px",
                  animation: "spin-slow 2.6s linear infinite",
                }}
              >
              
                <div
                  className="w-full h-full rounded-full flex items-center justify-center shadow-sm"
                  style={{ background: "white" }}
                >
          
                  <div className="text-sm font-bold tracking-wide" style={{ color: "#0f172a" }}>
                    Shoporia
                  </div>
                </div>
              </div>
            </div>


            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "14%",
                top: "24%",
                width: 28,
                height: 28,
                borderRadius: 8,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.35))",
                boxShadow: "0 6px 18px rgba(59,130,246,0.15), 0 2px 6px rgba(251,146,60,0.08)",
                transform: "rotate(25deg)",
                zIndex: 2,
              }}
            />

            <style>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        );
      }
