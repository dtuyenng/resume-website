import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Content></Content>
      <Experience></Experience>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
