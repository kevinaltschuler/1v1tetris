import { createSignal, createContext, useContext } from "solid-js";
import { writePlayerPos } from "./fbPlayerPosition";
import { GameIdContext } from "./gameId";

export const PlayerPosContext = createContext();

export function PlayerPosProvider(props) {
    const [getX, setX] = createSignal(0);
    const [getY, setY] = createSignal(0);

    const { id } = useContext(GameIdContext)

    const store = {
        getX, getY, setX: (x) => {
            writePlayerPos({ x, y: getY() }, id())
            setX(x)
        }, setY: (y) => {
            writePlayerPos({ x: getX(), y }, id())
            setY(y)
        }
    };

    return (
        <PlayerPosContext.Provider value={store}>
            {props.children}
        </PlayerPosContext.Provider>
    );
}

export function usePlayerPos() { return useContext(PlayerPosContext); }