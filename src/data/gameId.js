import { createSignal, createContext, useContext, createUniqueId } from "solid-js";
import { v4 as uuidv4 } from 'uuid';

export const GameIdContext = createContext();

export const playerId = uuidv4();

export function GameIdProvider(props) {
  const [id, setId] = createSignal(null);  

  return (
    <GameIdContext.Provider value={{id, setId}}>
      {props.children}
    </GameIdContext.Provider>
  );
}

export function useGameId() { return useContext(GameIdContext); }
