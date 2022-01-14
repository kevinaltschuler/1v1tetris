import MyButton from './components/MyButtonLocal';
import { CounterProvider } from './data/CounterProvider';

function App() {

  return (
    <CounterProvider>
      <div>
        hello nicole
        <br />
        <br />
        <MyButton />
      </div>
    </CounterProvider>
  );
}

export default App;
