import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Storecontext } from "../../Context/Storecontext";
import axios from "axios";

const Verify = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const success = searchparams.get("success");
  const orderid = searchparams.get("orderid");

  const { url } = useContext(Storecontext);

  const navigate = useNavigate();
  const veritypayment = async () => {
    const response = await axios.post(url + "api/order/verify", {
      success,
      orderid,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    veritypayment();
  }, []);
  return (
    <div className="verify">
      <div className="spenner"></div>
    </div>
  );
};

export default Verify;
