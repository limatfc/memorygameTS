import EasyGame from "./components/EasyGame";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Let's play a game?</h2>
      <h3>Memory game</h3>
      <button>I don't know how to play</button>
      <p>How big of challenge are you ready to face?</p>
      <button>Small</button>
      <button>Medium</button>
      <button>Big</button>
      <EasyGame />
    </div>
  );
}

export default App;
