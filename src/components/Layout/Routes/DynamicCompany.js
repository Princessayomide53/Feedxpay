import App from "../../../App";
import { useParams } from "react-router-dom";
import Main2 from "./Careers/Main2";
import Main1 from "./AboutUs/Main1";
import Main3 from "./Blog/Main3";

const DynamicCompany = () => {
  const { mainId } = useParams();

  if (mainId === "1") {
    return <Main1 />;
  } else if (mainId === "2") {
    return <Main2 />;
  } else if (mainId === "3") {
    return <Main3 />;
  } else {
    return <App />;
  }
};
export default DynamicCompany;
