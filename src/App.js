import QuoteBox from "./component/QuoteBox/QuoteBox";
import "./App.css";
import QuoteProvider from "./component/QuoteProvider/QuoteProvider";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <QuoteProvider>
          <QuoteBox />
        </QuoteProvider>
      </div>
    </div>
  );
}

export default App;
