import App from "../../../App";
import { useParams } from "react-router-dom";
import Main2 from "./Careers/Main2";
import Main1 from "./AboutUs/Main1";
import Main3 from "./Blog/Main3";

const DynamicCompany = () => {
  const { id } = useParams();

  // Render Home or Home based on the id parameter
  if (id === "1") {
    return <Main1 />;
  } else if (id === "2") {
    return <Main2 />;
  } else if (id === "3") {
    return <Main3 />;
  } else {
    // Handle other cases or provide a default component
    return <App />;
  }
};
export default DynamicCompany;
