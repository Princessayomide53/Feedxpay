import App from "../../../App";
import { useParams } from "react-router-dom";
import Support1 from "./FAQs/Support1";
import Support2 from "./Partner/Support2";
import Support4 from "./ContactSales/Support4";

const DynamicSupport = () => {
  const { id } = useParams();

  // Render Home or Home based on the id parameter
  if (id === "1") {
    return <Support1 />;
  } else if (id === "2") {
    return <Support2 />;
  } else if (id === "4") {
    return <Support4 />;
  } else {
    // Handle other cases or provide a default component
    return <App />;
  }
};
export default DynamicSupport;
