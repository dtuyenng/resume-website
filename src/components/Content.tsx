import Resume from "./Resume";
// import { Route, Routes } from "react-router-dom";

function Content() {
  return (
    <div id="content">
      {/* <SideMenu />
      <Routes>
        <Route path="/index.html" element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/portfolios" element={<Portfolio />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes> */}
      <Resume></Resume>
    </div>
  );
}

export default Content;
