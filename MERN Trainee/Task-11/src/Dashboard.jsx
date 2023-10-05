import React, { useState } from "react";
import "./Dashboard.css";
import Profile from "./Components/Profile";
import Analytics from "./Components/Analytics";
import ECommerce from "./Components/ECommerce";
import Tasks from "./Components/Tasks";

export default function Dashboard() {
  const [activeContent, setActiveContent] = useState("Analytics");
  console.log(activeContent);

  const handleNavigationClick = (content) => {
    console.log("Clicked on:", content);
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "Profile":
        return (
          <div>
            <Profile />
          </div>
        );
      case "Analytics":
        return (
          <div>
            <Analytics />
          </div>
        );
      case "E-Commerce":
        return (
          <div>
            {" "}
            <ECommerce />{" "}
          </div>
        );
      case "Tasks":
        return (
          <div>
            {" "}
            <Tasks />{" "}
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="Dashboard_main_container">
      <div className="Dashboard_child_1">
        <div className="Profile_container">
          <div className="profile_image_div">
            <img
              src="https://saikhmirsat.github.io/static/media/myPicture.0bd5ab69f956264c6997.png"
              alt=""
            />
          </div>
          <h3>Saikh Mirsat</h3>
          <details>
            <summary></summary>
            <button>Logout</button>
          </details>
        </div>
        <div className="child_2_navigation_option_div">
          <div
            onClick={() => handleNavigationClick("Analytics")}
            className={activeContent === "Analytics" ? "activeNavItem" : ""}
          >
            Analytics
          </div>
          <div
            onClick={() => handleNavigationClick("E-Commerce")}
            className={activeContent === "E-Commerce" ? "activeNavItem" : ""}
          >
            E-Commerce
          </div>
          <div
            onClick={() => handleNavigationClick("Profile")}
            className={activeContent === "Profile" ? "activeNavItem" : ""}
          >
            Profile
          </div>
          <div
            onClick={() => handleNavigationClick("Tasks")}
            className={activeContent === "Tasks" ? "activeNavItem" : ""}
          >
            Tasks
          </div>
        </div>
      </div>
      <div className="Dashboard_child_2">{renderContent()}</div>
    </div>
  );
}
