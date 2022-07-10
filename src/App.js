import QuoteBox from "./component/QuoteBox/QuoteBox";
import "./App.css";

function App() {
  const testClick = () => {
    console.log("NextBtn clicked.");
  };
  return (
    <div className="App">
      <div className="App-container">
        <QuoteBox
          text="A life spent making mistakes is not only more honorable but more useful than a life spent in doing nothing."
          author="George Bernard Shaw"
          onClick={testClick}
        />
      </div>
    </div>
  );
}

export default App;
