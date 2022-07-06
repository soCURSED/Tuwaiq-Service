import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/Restaurant.css";
const Order = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/student-dashboard");
  };
  return (
    <>
      <div className="orderMain">
        <h1>اطلب الي تبغاه</h1>
        <div className="orderContent">
          <input type="text" className="order-address" placeholder="رقم الكلاس" />
          <textarea
            type="text"
            className="order-field"
            placeholder="طلباتك"
            style={{ resize: "none" }}
          />
          <div className="btn-group">
            <button onClick={back} type="button" className="btn-note-add">
              طلب
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Order;
