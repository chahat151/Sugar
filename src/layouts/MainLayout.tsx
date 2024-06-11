import { Outlet } from "react-router-dom";
import Footer from "components/Footer";
import SecondaryHeader from "components/Header/SecondaryHeader";

function ChocoLayout() {
  return (
    <div>
      <SecondaryHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ChocoLayout;
