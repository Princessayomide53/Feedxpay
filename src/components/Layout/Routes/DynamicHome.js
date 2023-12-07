import React from "react";
import Home1 from "./MakePayment/Home1";
import Home3 from "../Routes/Savings/Home3";
import Home2 from "../Routes/VirtualCards/Home2";
import Home4 from "../Routes/Investments/Home4";
import App from "../../../App";
import { useParams } from "react-router-dom";

const DynamicHome = () => {
  const { homeId } = useParams();

  // Render Home1 or Home2 based on the id parameter
  if (homeId === "1") {
    return <Home1 />;
  } else if (homeId === "2") {
    return <Home2 />;
  } else if (homeId === "3") {
    return <Home3 />;
  } else if (homeId === "4") {
    return <Home4 />;
  } else {
    return <App />;
  }
};

export default DynamicHome;
