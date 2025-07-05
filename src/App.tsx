import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showBot, setShowBot] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Toggle bot
  const toggleBot = () => setShowBot((prev) => !prev);

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

          {/* ✅ زرار فتح البوت */}
          <button
            onClick={toggleBot}
            aria-label="Toggle Chatbot"
            style={{
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
              transition: "transform 0.2s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {showBot ? <X size={isMobile ? 20 : 24} /> : <MessageCircle size={isMobile ? 22 : 26} />}
          </button>

          {/* ✅ واجهة البوت */}
          <div
            style={{
              position: "fixed",
              bottom: showBot ? (isMobile ? "0" : "90px") : (isMobile ? "-110vh" : "-650px"),
              right: isMobile ? "0" : "20px",
              left: isMobile ? "0" : "auto",
              width: isMobile ? "100vw" : "400px",
              height: isMobile ? "100vh" : "600px",
              borderRadius: isMobile ? "0" : "12px",
              boxShadow: isMobile ? "none" : "0 8px 20px rgba(0,0,0,0.15)",
              overflow: "hidden",
              zIndex: 9999,
              backgroundColor: "#fff",
              transition: "bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "bottom",
            }}
          >
            <iframe
              src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
              title="GT Chatbot"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                transform: "translateZ(0)",
              }}
              loading="lazy"
              allow="microphone; camera"
            />
          </div>

          {/* ✅ زر إغلاق عائم للموبايل */}
          {isMobile && showBot && (
            <button
              onClick={toggleBot}
              aria-label="Close Chatbot"
              style={{
                position: "fixed",
                top: "14px",
                right: "16px",
                zIndex: 10001,
                backgroundColor: "#F28500",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                transition: "transform 0.2s ease",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <X size={20} />
            </button>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
