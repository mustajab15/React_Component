import "./App.css";
import Biodata from "./biodata/biodata";
import Header from "./header/header";
import Identity from "./identity/identity";
import Higlight from "./higlight/higlight";
function App() {
  return (
    <>
      <div className="card">
        <div className="top">
          <Header />
          <Identity />
        </div>
        <div className="bottom">
          <Biodata />
          <Higlight />
        </div>
      </div>
    </>
  );
}

export default App;
