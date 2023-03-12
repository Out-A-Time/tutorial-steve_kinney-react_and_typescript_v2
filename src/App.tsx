
import './App.css';
import Badge from './components/Badge';
import Counter from './components/Counter';
import InspirationalQuote_app from './components/InspirationalQuotes/InspirationalQuotes';

// import ControlPanel from './components/ControlPanel';

function App() {

  return (
    <main className="App">
      <Badge name={'Max'} />
      <Counter />
      <InspirationalQuote_app />
    </main>
  );
}

export default App;
