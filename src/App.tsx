
import './App.css';
import Badge from './components/Badge';
import Counter from './components/Counter';
// import ControlPanel from './components/ControlPanel';

function App() {

  return (
    <main className="App">
      <Badge name={'Max'} />
      <Counter />
    </main>
  );
}

export default App;
