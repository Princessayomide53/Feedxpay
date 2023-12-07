import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "../Routes/MakePayment/Home1";
import Home3 from "../Routes/Savings/Home3";
import Home2 from "../Routes/VirtualCards/Home2";
import Home4 from "../Routes/Investments/Home4";
import App from "../../../App";
import DynamicHome from "../Routes/DynamicHome";
import DynamicCompany from "../Routes/DynamicCompany";
import Main3 from "../Routes/Blog/Main3";
import Main1 from "../Routes/AboutUs/Main1";
import Main2 from "../Routes/Careers/Main2";
import DynamicSupport from "../Routes/DynamicSupport";
import Support1 from "../Routes/FAQs/Support1";
import Support2 from "../Routes/Partner/Support2";
import Support4 from "../Routes/ContactSales/Support4";
import SignIn from "../Routes/SignIn/SignIn";
import OpenAccount from "../Routes/OpenAcct/OpenAccount";
import Business from "../../Business/Business";
import Individual from "../../Individual";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/home/:id" element={<DynamicHome />} />
          <Route path="/support/:id" element={<DynamicSupport />} />
          <Route path="/main/:id" element={<DynamicCompany />} />
          <Route path="/home/1" element={<Home1 />} />
          <Route path="/home/2" element={<Home2 />} />
          <Route path="/home/3" element={<Home3 />} />
          <Route path="/home/4" element={<Home4 />} />
          <Route path="/main/1" element={<Main1 />} />
          <Route path="/main/2" element={<Main2 />} />
          <Route path="/main/3" element={<Main3 />} />
          <Route path="/support/1" element={<Support1 />} />
          <Route path="/support/2" element={<Support2 />} />
          <Route path="/support/4" element={<Support4 />} />
          <Route path="/openAcct" element={<OpenAccount />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterComponent;
