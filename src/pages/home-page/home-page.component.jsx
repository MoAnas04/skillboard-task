import react from "react";

import SideBar from "../../components/sidebar/sidebar.component";
import WelcomeBox from "../../components/welcome-box/welcome-box.component";
import WhyBox from "../../components/why-box/why-box.component";

const HomePage = () => (
  <div className="home-page">
    <SideBar></SideBar>
    <WelcomeBox></WelcomeBox>
    <WhyBox></WhyBox>
  </div>
);

export default HomePage;
