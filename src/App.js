import "./App.css";
import GridContainer from "./Components/GridContainer.js";
import GridStoneContainer from "./Components/GridStoneContainer.js";

function App() {
  return (
    <div className="grid-outer">
      <GridContainer />
      <GridStoneContainer />
    </div>
  );
}

export default App;
