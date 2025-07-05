
import { useState, useEffect, useCallback, useMemo } from "react";

const App = () => {
  const [showBot, setShowBot] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // تحسين دالة فحص نوع الجهاز
  const checkDevice = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    if (mobile !== isMobile) {
      setIsMobile(mobile);
    }
  }, [isMobile]);

  // تحسين event listeners
  useEffect(() => {
    let timeoutId;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 100);
    };

    window.addEventListener('resize', debouncedCheck, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, [checkDevice]);

  // تحسين إغلاق البوت
  const handleClickOutside = useCallback((event) => {
    if (!showBot || !isMobile) return;
    
    const botContainer = event.target.closest('#chatbot-container');
    const botButton = event.target.closest('#chatbot-button');
    
    if (!botContainer && !botButton) {
      setShowBot(false);
    }
  }, [showBot, isMobile]);

  useEffect(() => {
    if (showBot && isMobile) {
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      document.addEventListener('click', handleClickOutside, { passive: true });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [showBot, isMobile, handleClickOutside]);

  // تحسين toggle البوت
  const toggleBot = useCallback(() => {
    setShowBot(prev => !prev);
  }, []);

  // تحسين الإغلاق
  const closeBot = useCallback(() => {
    setShowBot(false);
  }, []);

  // memo للـ styles
  const buttonStyles = useMemo(() => ({
    position: "fixed",
    bottom: isMobile ? "15px" : "20px",
    right: isMobile ? "15px" : "20px",
    width: isMobile ? "50px" : "60px",
    height: isMobile ? "50px" : "60px",
    borderRadius: "50%",
    backgroundColor: "#F28500",
    color: "#fff",
    fontSize: isMobile ? "20px" : "26px",
    border: "none",
    cursor: "pointer",
    zIndex: 10000,
    boxShadow: "0 4px 12px rgba(242, 133, 0, 0.25)",
    transition: "transform 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    touchAction: "manipulation",
    willChange: "transform",
  }), [isMobile]);

  const containerStyles = useMemo(() => ({
    position: "fixed",
    bottom: showBot ? (isMobile ? "0" : "80px") : (isMobile ? "-100vh" : "-650px"),
    right: isMobile ? "0" : "20px",
    left: isMobile ? "0" : "auto",
    width: isMobile ? "100vw" : "400px",
    height: isMobile ? "100vh" : "600px",
    borderRadius: isMobile ? "0" : "12px",
    boxShadow: isMobile ? "none" : "0 8px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
    zIndex: 9999,
    transition: "bottom 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    backgroundColor: "#fff",
    willChange: "bottom",
    backfaceVisibility: "hidden",
  }), [showBot, isMobile]);

  // Sample content للعرض
  const sampleContent = useMemo(() => (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Website</h1>
      <p className="text-gray-600 mb-4">Click the chat button to test the bot!</p>
      <div className="grid gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Section {i + 1}</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  ), []);

  return (
    <>
      {sampleContent}
      
      {/* Overlay محسن للموبايل */}
      {showBot && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[9998] transition-opacity duration-200"
          onClick={closeBot}
          style={{ willChange: "opacity" }}
        />
      )}

      {/* زر البوت محسن */}
      <button
        id="chatbot-button"
        onClick={toggleBot}
        aria-label={showBot ? "إغلاق الشات بوت" : "فتح الشات بوت"}
        style={buttonStyles}
        className="hover:scale-105 active:scale-95"
      >
        {showBot ? "✕" : "💬"}
      </button>

      {/* حاوي الشات بوت محسن */}
      <div id="chatbot-container" style={containerStyles}>
        {/* شريط علوي محسن للموبايل */}
        {isMobile && (
          <div className="bg-[#F28500] text-white p-3 flex justify-between items-center">
            <span className="font-semibold text-sm">GT | GlobalTeam</span>
            <button
              onClick={closeBot}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 w-7 h-7 flex items-center justify-center text-lg transition-colors duration-150"
              aria-label="إغلاق الشات بوت"
            >
              ✕
            </button>
          </div>
        )}

        {/* iframe محسن */}
        <iframe
          src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
          title="GT Chatbot"
          className="w-full border-none block"
          style={{
            height: isMobile ? "calc(100% - 48px)" : "100%",
            transform: "translateZ(0)", // تحسين الأداء
          }}
          loading="lazy"
          allow="microphone; camera"
        />
      </div>
    </>
  );
};

export default App;
