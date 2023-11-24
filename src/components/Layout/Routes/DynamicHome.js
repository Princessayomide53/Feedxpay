import React from "react";
import Home1 from "./MakePayment/Home1";
import Home3 from "../Routes/Savings/Home3";
import Home2 from "../Routes/VirtualCards/Home2";
import Home4 from "../Routes/Investments/Home4";
import App from "../../../App";
import { useParams } from "react-router-dom";

const DynamicHome = () => {
  const { id } = useParams();

  // Render Home1 or Home2 based on the id parameter
  if (id === "1") {
    return <Home1 />;
  } else if (id === "2") {
    return <Home2 />;
  } else if (id === "3") {
    return <Home3 />;
  } else if (id === "4") {
    return <Home4 />;
  } else {
    // Handle other cases or provide a default component
    return <App />;
  }
};

export default DynamicHome;
