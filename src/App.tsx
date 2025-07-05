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

// ✅ Define breakpoints for different screen sizes
const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  large: 1440,
};

const App = () => {
  const [showBot, setShowBot] = useState(false);
  // ✅ State to track the current screen size category
  const [screenSize, setScreenSize] = useState("desktop");

  // ✅ Detect screen size and categorize it
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setScreenSize("mobile");
      } else if (width <= BREAKPOINTS.tablet) {
        setScreenSize("tablet");
      } else if (width <= BREAKPOINTS.large) {
        setScreenSize("desktop");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleBot = () => setShowBot((prev) => !prev);

  // ✅ Helper variables for cleaner conditional logic
  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  // --- Style Objects for better readability ---

  const chatButtonStyle = {
    position: "fixed",
    bottom: isMobile ? "20px" : "30px",
    right: isMobile ? "20px" : "30px",
    width: isMobile ? "55px" : "65px",
    height: isMobile ? "55px" : "65px",
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
    transition: "transform 0.2s ease, opacity 0.2s ease",
    opacity: isMobile && showBot ? 0 : 1, // Hide on mobile when chat is open
    pointerEvents: isMobile && showBot ? 'none' : 'auto', // Disable pointer events when hidden
  };

  const chatContainerStyle = {
    position: "fixed",
    bottom: showBot ? (isMobile ? "0" : "110px") : (isMobile ? "-110vh" : "-800px"),
    right: isMobile ? "0" : (isTablet ? "30px" : "40px"),
    left: isMobile ? "0" : "auto",
    width: isMobile ? "100vw" : (isTablet ? "400px" : "420px"),
    height: isMobile ? "100vh" : (isTablet ? "620px" : "700px"),
    maxHeight: isMobile ? "100vh" : "85vh",
    maxWidth: "100vw",
    borderRadius: isMobile ? "0" : "16px",
    boxShadow: isMobile ? "none" : "0 8px 25px rgba(0,0,0,0.2)",
    overflow: "hidden",
    zIndex: 9999,
    backgroundColor: "#fff",
    transition: "bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "bottom",
  };

  const closeButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 10001,
    backgroundColor: "#F28500",
    border: "none",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
    transition: "transform 0.2s ease, opacity 0.3s ease",
    opacity: isMobile && showBot ? 1 : 0,
    pointerEvents: isMobile && showBot ? 'auto' : 'none',
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

          {/* ✅ Main Chatbot Toggle Button */}
          <button
            onClick={toggleBot}
            aria-label="Toggle Chatbot"
            style={chatButtonStyle}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Show different icon for open/close on desktop/tablet */}
            {!isMobile && showBot ? (
              <X size={isMobile ? 24 : 28} />
            ) : (
              <MessageCircle size={isMobile ? 24 : 28} />
            )}
          </button>

          {/* ✅ Chatbot Interface */}
          <div style={chatContainerStyle}>
            <iframe
              src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
              title="GT Chatbot"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                transform: "translateZ(0)", // GPU acceleration for smoother animations
              }}
              loading="lazy"
              allow="microphone; camera"
            />
          </div>

          {/* ✅ Floating Close Button (Mobile Only) */}
          <button
            onClick={toggleBot}
            aria-label="Close Chatbot"
            style={closeButtonStyle}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <X size={26} />
          </button>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
