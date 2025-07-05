const App = () => {
  // ... existing state and effects ...

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* ... existing components ... */}

        <BrowserRouter>
          {/* ... routes ... */}

          {/* Floating Chat Button - Conditionally hide on mobile when bot is open */}
          {(!isMobile || !showBot) && (
            <button
              onClick={toggleBot}
              aria-label="Toggle Chatbot"
              style={{
                // ... existing styles ...
              }}
            >
              {showBot ? <X size={isMobile ? 20 : 24} /> : <MessageCircle size={isMobile ? 22 : 26} />}
            </button>
          )}

          {/* Bot Interface */}
          <div
            style={{
              // ... existing styles ...
            }}
          >
            <iframe
              // ... existing iframe props ...
            />
          </div>

          {/* Mobile Close Button - Fixed position at bottom */}
          {isMobile && showBot && (
            <button
              onClick={toggleBot}
              aria-label="Close Chatbot"
              style={{
                position: "fixed",
                bottom: "20px", // Position at bottom
                right: "20px",
                zIndex: 10001,
                backgroundColor: "#F28500",
                border: "none",
                borderRadius: "50%",
                width: "50px", // Match floating button size
                height: "50px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <X size={24} />
            </button>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
