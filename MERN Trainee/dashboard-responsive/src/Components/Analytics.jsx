import React from "react";
import "./Analytics.css";
import { FiTruck } from "react-icons/fi";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import image1 from "../assets/Analytics1.png";
export default function Analytics() {
  return (
    <div className="Analytics_main_Container">
      <h4>Analytics Dashboard</h4>
      <div className="analytics_first_container">
        <div className="analytics_first_container_child1">
          <div className="analytics_first_container_child1_cards">
            <div>
              <p>Sales</p>
              <FiTruck
                color="royalBlue"
                className="analytics_stickers_first_con"
              />
            </div>
            <h1>2.382</h1>
            <div>
              <b>-3.65%</b>
              <p>Since last week</p>
            </div>
          </div>
          <div className="analytics_first_container_child1_cards">
            <div>
              <p>Earnings</p>
              <PiCurrencyDollarBold
                color="royalBlue"
                className="analytics_stickers_first_con"
              />
            </div>
            <h1>$21.302</h1>
            <div>
              <b>6.65%</b>
              <p>Since last week</p>
            </div>
          </div>{" "}
          <div className="analytics_first_container_child1_cards">
            <div>
              <p>Visitors</p>
              <FaArrowsDownToPeople
                color="royalBlue"
                className="analytics_stickers_first_con"
              />
            </div>
            <h1>14.212</h1>
            <div>
              <b>5.25%</b>
              <p>Since last week</p>
            </div>
          </div>{" "}
          <div className="analytics_first_container_child1_cards">
            <div>
              <p>Orders</p>
              <AiOutlineShoppingCart
                color="royalBlue"
                className="analytics_stickers_first_con"
              />
            </div>
            <h1>89</h1>
            <div>
              <b>-2.65%</b>
              <p>Since last week</p>
            </div>
          </div>
        </div>
        <div className="analytics_first_container_child2">
          <img
            src="https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="analytics_second_container">
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img
            src="https://letslearnoffice365.files.wordpress.com/2019/02/way16.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://graphicdesignjunction.com/wp-content/uploads/2020/08/web-design-charts-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
