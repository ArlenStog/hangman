import Body from "../../containers/Body/Body";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import { HomePageStyled } from "./HomePageStyled";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Header />
      <Body />
      <Footer />
    </HomePageStyled>
  );
};

export default HomePage;
