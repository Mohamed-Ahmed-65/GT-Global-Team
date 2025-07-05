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

  // Effect to detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleBot = () => setShowBot((prev) => !prev);

  // --- Style for the main chat container ---
  const chatContainerStyle = {
    position: "fixed",
    bottom: showBot ? (isMobile ? "0" : "95px") : "-110vh", // Moves completely off-screen when hidden
    right: isMobile ? "0" : "20px",
    left: isMobile ? "0" : "auto",
    width: isMobile ? "100vw" : "400px",
    height: isMobile ? "100vh" : "600px",
    maxHeight: "85vh",
    borderRadius: isMobile ? "0" : "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    overflow: "hidden",
    zIndex: 9999,
    backgroundColor: "#fff",
    transition: "bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "bottom",
  };

  // --- Style for the SINGLE, UNIFIED toggle button ---
  const toggleButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#F28500",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    zIndex: 10001, // Ensure it's on top of the chat window
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
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

          {/* ✅ Chatbot Iframe Container */}
          <div style={chatContainerStyle}>
            <iframe
              src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
              title="GT Chatbot"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              loading="lazy"
              allow="microphone; camera"
            />
          </div>

          {/* ✅ SINGLE Toggle Button for All Screens */}
          <button
            onClick={toggleBot}
            aria-label={showBot ? "Close Chatbot" : "Open Chatbot"}
            style={toggleButtonStyle}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Simple and clean icon change */}
            {showBot ? <X size={28} /> : <MessageCircle size={28} />}
          </button>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
