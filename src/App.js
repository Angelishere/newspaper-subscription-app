import logo from './logo.svg';
import './App.css';
import AddSubscriber from './components/AddSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';
import ViewSubscriber from './components/ViewSubscriber';

function App() {
  return (
    <div>
      <AddSubscriber/>
      <SearchSubscriber/>
      <DeleteSubscriber/>
      <ViewSubscriber/>
    </div>
  );
}

export default App;
