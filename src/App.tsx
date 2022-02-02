import Scrollbars from "react-custom-scrollbars-2";
import "./App.scss";
import About from "./components/About";
import Header from "./components/Header";
import Layout from "./layout/Layout";

function App() {
  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      <div className="App">
        <Layout>
          <Header />
          <About />
        </Layout>
      </div>
    </Scrollbars>
  );
}

export default App;
