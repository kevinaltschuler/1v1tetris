import { GameContainer } from './components/GameContainer';
import { GameIdProvider } from './data/gameId';
import { PlayerPosProvider } from './data/PlayerPosProvider';

function App() {


  return (<GameIdProvider>
    <PlayerPosProvider>
      <GameContainer />
    </PlayerPosProvider>
  </GameIdProvider>)

}

export default App;
