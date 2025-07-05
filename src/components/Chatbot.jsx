import { useState, useEffect, useMemo, useCallback } from "react";
import { MessageCircle, X } from "lucide-react";

// Styles ثابتة تم تعريفها خارج المكون لتحسين الأداء
const commonIconStyle = {
  position: "absolute",
  transition: "opacity 0.25s ease-in-out, transform 0.25s ease-in-out",
};

const iconContainerStyle = {
  position: "relative",
  width: "28px",
  height: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Chatbot = () => {
  const [showBot, setShowBot] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPressed, setIsPressed] = useState(false);

  // استخدام useCallback لمنع إعادة تعريف الدالة في كل render
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // استخدام useCallback مع functional update لتجنب الاعتماد على state
  const toggleBot = useCallback(() => {
    setShowBot((prev) => !prev);
  }, []);

  // استخدام useMemo لحساب الـ styles فقط عند تغير الاعتماديات
  const chatContainerStyle = useMemo(() => ({
    position: "fixed",
    zIndex: 9999,
    backgroundColor: "#fff",
    borderRadius: isMobile ? "0" : "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    overflow: "hidden",
    transition: "bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-out, transform 0.3s ease-out",
    willChange: "bottom, opacity, transform",
    bottom: showBot ? "95px" : "-110vh",
    right: isMobile ? "0" : "20px",
    top: isMobile && showBot ? "0" : "auto",
    left: isMobile ? "0" : "auto",
    width: isMobile ? "auto" : "400px",
    height: isMobile ? "auto" : "600px",
    opacity: showBot ? 1 : 0,
    transform: showBot ? "scale(1)" : "scale(0.95)",
    pointerEvents: showBot ? "auto" : "none",
  }), [isMobile, showBot]);

  const toggleButtonStyle = useMemo(() => ({
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
    zIndex: 10001,
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
    overflow: "hidden",
    transform: isPressed ? "scale(0.92)" : "scale(1)", // التحكم بالتأثير عبر state
  }), [isPressed]);

  return (
    <>
      <div style={chatContainerStyle}>
        <iframe
          src="https://app.fastbots.ai/embed/cmcqqu1zx19oyrily73fp3br7"
          title="GT Chatbot"
          style={{ width: "100%", height: "100%", border: "none" }}
          loading="lazy"
          allow="microphone; camera"
        />
      </div>
      <button
        onClick={toggleBot}
        aria-label={showBot ? "Close Chatbot" : "Open Chatbot"}
        style={toggleButtonStyle}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)} // للتعامل مع حالة سحب الماوس خارج الزر
      >
        <div style={iconContainerStyle}>
          <MessageCircle
            size={28}
            style={{
              ...commonIconStyle,
              opacity: showBot ? 0 : 1,
              transform: showBot ? "rotate(-30deg) scale(0.8)" : "rotate(0deg) scale(1)",
            }}
          />
          <X
            size={28}
            style={{
              ...commonIconStyle,
              opacity: showBot ? 1 : 0,
              transform: showBot ? "rotate(0deg) scale(1)" : "rotate(30deg) scale(0.8)",
            }}
          />
        </div>
      </button>
    </>
  );
};

export default Chatbot;
