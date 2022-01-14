import MyButton from './components/MyButtonLocal';
import { CounterProvider } from './data/CounterProvider';

function App() {

  return (
    <CounterProvider>
      <div>
        hello welcome to the app
        <br />
        <br />
        <MyButton />
      </div>
    </CounterProvider>
  );
}

export default App;
