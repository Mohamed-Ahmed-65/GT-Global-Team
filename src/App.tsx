import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* ✅ Chatbot Iframe */}
        <iframe
          style={{
            width: "400px",
            height: "600px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            border: "none",
            zIndex: 9999,
          }}
          src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
          title="GT Chatbot"
        ></iframe>
        {/* ✅ End Chatbot */}
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
