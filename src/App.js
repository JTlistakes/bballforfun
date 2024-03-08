import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./screens/mainScreen";
import CourtImage from "./images/court.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${CourtImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "top left",
        height: "100vh",
        width: "auto",
        overflow: "hidden",
      }}
    >
      <MainScreen />
    </div>
  );
}

export default App;
