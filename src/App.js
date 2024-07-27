import logo from './logo.svg';
import './App.css';
import AddSubscriber from './components/AddSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';

function App() {
  return (
    <div>
      <AddSubscriber/>
      <SearchSubscriber/>
      <DeleteSubscriber/>
    </div>
  );
}

export default App;
