import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";
import { styled } from "./styles/config.stitches";
import globalStylesStiches from "./styles/globalStytlesStitches";

function App() {
  globalStylesStiches();
  return (
    <SApp>
      <Nav />
      <SContainer>
        <Hero />
        <Slider />
      </SContainer>
      <Footer />
    </SApp>
  );
}

export default App;

const SApp = styled("div", {
  maxWidth: "70vw",
  height: "65vh",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: 0,
  right: 0,
  margin: "auto",
});

const SContainer = styled("div", {
  minHeight: "60vh",
  display: "flex",
});
