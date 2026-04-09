"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ChatbotConfig?: {
      showcase?: boolean;
    };
    Chatbot?: {
      mountChatbot?: () => void;
    };
  }
}

export function ChatbotScript() {
  useEffect(() => {
    window.ChatbotConfig = { showcase: false };

    if (document.getElementById("chatbot-script")) {
      window.Chatbot?.mountChatbot?.();
      return;
    }

    const script = document.createElement("script");
    script.id = "chatbot-script";
    script.src = "https://d8oi5npu3mvp2.cloudfront.net/cdn/chatbot.js";
    script.charset = "UTF-8";
    script.async = true;
    script.onload = () => {
      window.Chatbot?.mountChatbot?.();
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    null
  );
}

export default ChatbotScript;