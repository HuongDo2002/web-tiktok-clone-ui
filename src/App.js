import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import ProFile from "~/pages/ProFile";
import Live from "~/pages/Live";
import Explore from "~/pages/Explore";
import DefaultLayout from "~/components/Layout/DefaultLayout";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={
            <DefaultLayout><Home /></DefaultLayout>} />

          <Route path="/following" element={
            <DefaultLayout><Following /></DefaultLayout>} />

          <Route path="/:nickname" element={
            <DefaultLayout ><ProFile /></DefaultLayout>} />

          <Route path="/live" element={
            <DefaultLayout><Live /></DefaultLayout>} />

          <Route path="/explore" element={
            <DefaultLayout><Explore /></DefaultLayout>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
