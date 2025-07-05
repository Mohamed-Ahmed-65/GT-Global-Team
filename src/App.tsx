import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle, X } from "lucide-react"; // أيقونات حديثة
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showBot, setShowBot] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ تحديث حالة الموبايل عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ زرار فتح/إغلاق البوت
  const toggleBot = () => setShowBot((prev) => !prev);

  // ✅ ستايلات الزرار
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: isMobile ? "50px" : "60px",
    height: isMobile ? "50px" : "60px",
    borderRadius: "50%",
    backgroundColor: "#F28500",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    zIndex: 10000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
  };

  // ✅ ستايلات الشات بوت
  const botContainerStyle = {
    position: "fixed",
    bottom: showBot ? (isMobile ? "0" : "90px") : (isMobile ? "-100vh" : "-650px"),
    right: isMobile ? "0" : "20px",
    left: isMobile ? "0" : "auto",
    width: isMobile ? "100vw" : "400px",
    height: isMobile ? "100vh" : "600px",
    borderRadius: isMobile ? "0" : "12px",
    boxShadow: isMobile ? "none" : "0 8px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
    zIndex: 9999,
    transition: "bottom 0.3s ease",
    backgroundColor: "#fff",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* ✅ زر البوت */}
          <button
            onClick={toggleBot}
            aria-label="Toggle Chatbot"
            style={buttonStyle}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {showBot ? <X size={isMobile ? 20 : 24} /> : <MessageCircle size={isMobile ? 22 : 26} />}
          </button>

          {/* ✅ واجهة البوت */}
          <div style={botContainerStyle}>
            {isMobile && (
              <div
                style={{
                  backgroundColor: "#F28500",
                  color: "#fff",
                  padding: "10px 15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: 600 }}>GT | GlobalTeam</span>
                <button
                  onClick={toggleBot}
                  aria-label="Close Chatbot"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  <X size={22} />
                </button>
              </div>
            )}

            <iframe
              src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
              title="GT Chatbot"
              style={{
                width: "100%",
                height: isMobile ? "calc(100% - 48px)" : "100%",
                border: "none",
              }}
              allow="microphone; camera"
              loading="lazy"
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
