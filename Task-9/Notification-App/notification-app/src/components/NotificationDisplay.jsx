import React, { useEffect, useState } from "react";
import "./NotificationDisplay.css";

function NotificationDisplay() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    // Fetch the greeting message from the backend
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

    // Show the greeting after a delay
    const greetingTimeout = setTimeout(fetchGreeting, 5000); // 10,000 milliseconds (10 seconds)

    // Clean up the timeout to prevent memory leaks
    return () => {
      clearTimeout(greetingTimeout);
    };
  }, []);

  const closeNotification = () => {
    setShowGreeting(false);
  };

  return (
    <div className={`notification-display ${showGreeting ? "show" : "hide"}`}>
      <p>{greetingMessage}</p>
      <span className="close-button" onClick={closeNotification}>
        &times;
      </span>
    </div>
  );
}

export default NotificationDisplay;
