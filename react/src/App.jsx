import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./assets/style.css";
// import PlayBar from "./components/PlayBar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Home />
        {/* <PlayBar /> */}
      </div>
    </div>
  );
}

export default App;
