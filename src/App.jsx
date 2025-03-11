import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import ServiceContainer from "./components/ServiceContainer";
import EventContainer from "./components/Eventcontainer";
import { Topbar } from "./components/Topbar";
import Ab from "./components/Ab";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ProductContainer />
      <ServiceContainer />
      <EventContainer />
      <Ab />
      <Footer />
    </>
  );
}
export default App;
