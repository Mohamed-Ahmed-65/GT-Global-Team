import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showBot, setShowBot] = useState(false);

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

          {/* ✅ زرار البوت */}
          <button
            onClick={() => setShowBot((prev) => !prev)}
            aria-label="Toggle chatbot"
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#F28500",
              color: "#fff",
              fontSize: "26px",
              border: "none",
              cursor: "pointer",
              zIndex: 10000,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            💬
          </button>

          {/* ✅ iframe الخاص بالشات بوت */}
          <div
            style={{
              position: "fixed",
              bottom: showBot ? "90px" : "-700px", // smooth slide
              right: "20px",
              width: "400px",
              maxWidth: "90vw",
              height: "600px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              overflow: "hidden",
              zIndex: 9999,
              transition: "bottom 0.4s ease",
            }}
          >
            <iframe
              src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
              title="GT Chatbot"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
