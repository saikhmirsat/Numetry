import React, { useEffect, useState } from "react";
import "./NotificationDisplay.css";

function NotificationDisplay() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/notifications`);
        if (!response.ok) {
          throw new Error("Failed to fetch greeting");
        }
        const data = await response.json();
        setGreetingMessage(data.message);
        setShowGreeting(true);
      } catch (error) {
        console.error("Failed to fetch greeting:", error);
      }
    };
    const greetingTimeout = setTimeout(fetchGreeting, 10000); // 10,000 milliseconds (10 seconds)

    return () => {
      clearTimeout(greetingTimeout);
    };
  }, []);

  const closeNotification = () => {
    setShowGreeting(false);
  };

  return (
    <div className={`notification-display ${showGreeting ? "show" : "hide"}`}>
      <h3>{greetingMessage}</h3>
      <span className="close-button" onClick={closeNotification}>
        &times;
      </span>
      
    </div>
  );
}

export default NotificationDisplay;
