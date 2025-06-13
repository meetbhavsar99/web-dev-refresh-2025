import './App.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';

function App() {
  return (
    <div>
      {/* <Greeter name="Bella" from="Meet" />
      <Greeter name="Rachel" from="Meet" />
      <Greeter name="Meet" from="Bella" />
      <Greeter />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['a', 'b', 'c']} /> */}
      <DoubleDice />
    </div>
  );
}

export default App;
