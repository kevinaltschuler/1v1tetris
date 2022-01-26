import { GameContainer } from './components/GameContainer.jsx';
import { GameIdProvider } from './data/gameId';
import { PlayerPosProvider } from './data/PlayerPosProvider.jsx';

console.log('hello');

function App() {
    return (<GameIdProvider>
  yo
        <PlayerPosProvider>
            <GameContainer />
        </PlayerPosProvider>
    </GameIdProvider>);
}

export default App;
