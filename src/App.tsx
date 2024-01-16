import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./Footer";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Content></Content>
      <Timeline></Timeline>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
