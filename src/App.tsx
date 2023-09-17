import "./App.css";
import Listing from "./components/listing/Listing";
import data from "./data/etsy";

function App() {
  return <Listing data={data} />;
}

export default App;
