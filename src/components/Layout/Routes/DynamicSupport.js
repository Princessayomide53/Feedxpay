import App from "../../../App";
import { useParams } from "react-router-dom";
import Support1 from "./FAQs/Support1";
import Support2 from "./Partner/Support2";
import Support4 from "./ContactSales/Support4";

const DynamicSupport = () => {
  const { supportId } = useParams();

  if (supportId === "1") {
    return <Support1 />;
  } else if (supportId === "2") {
    return <Support2 />;
  } else if (supportId === "4") {
    return <Support4 />;
  } else {
    return <App />;
  }
};
export default DynamicSupport;
