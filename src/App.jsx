import { Box } from "@chakra-ui/react";
// import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Superiority from "./component/Superiority";
import Reward from "./component/Reward";
import Market from "./component/Market";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Box mx={{ md: 18, lg: 32 }}>
        <main>
          <Hero />
          <Superiority />
          <Reward />
          <Market />
        </main>
        <Footer />
      </Box>
    </>
  );
}

export default App;
