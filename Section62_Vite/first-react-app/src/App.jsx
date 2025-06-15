import './App.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import ShoppingList from './ShoppingList';

const data = [
  { id: 1, item: 'Milk', quantity: '4', completed: false },
  { id: 2, item: 'Ball', quantity: '2', completed: true },
  { id: 3, item: 'Peach', quantity: '2', completed: true },
  { id: 4, item: 'Apple', quantity: '4', completed: false },
];

function App() {
  return (
    <div>
      {/* <Heading color="pink" text="Bella!" fontSize="69px" /> */}
      {/* <Greeter name="Bella" from="Meet" />
      <Greeter name="Rachel" from="Meet" />
      <Greeter name="Meet" from="Bella" />
      <Greeter />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['a', 'b', 'c']} /> */}
      {/* <DoubleDice /> */}
      {/* <ColorList colors={['pink', 'skin', 'red', 'white']} /> */}

      <ShoppingList items={data} />
    </div>
  );
}

export default App;
