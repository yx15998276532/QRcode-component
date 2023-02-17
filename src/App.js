import QRCode from "./components/QRCode";
import imageElem from "./images/image.png";
import "./App.css";
function App() {
  return (
    <div className="App">
      <QRCode src={imageElem} />
    </div>
  );
}

export default App;
