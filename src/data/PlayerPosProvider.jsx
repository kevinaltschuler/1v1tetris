import { createSignal, createContext, useContext } from 'solid-js';
import { shapeTypes } from '../constants/shapeTypes';
import { clamp } from '../utils/clamp';
import { writePlayerPos } from './fbPlayerPosition';
import { GameIdContext } from './gameId';

export const PlayerPosContext = createContext();

export function PlayerPosProvider(props) {
    const [getX, setX] = createSignal(0);
    const [getY, setY] = createSignal(0);
    const [getShape, setShape] = createSignal(shapeTypes.L);

    const { id } = useContext(GameIdContext);

    const store = {
        getX,
        getY,
        setX(x) {
            const _x = clamp(x, 0, 9);
            writePlayerPos({ x: _x, y: getY() }, id());
            setX(_x);
        },
        setY(y) {
            const _y = clamp(y, 0, 19);
            writePlayerPos({ x: getX(), y: _y }, id());
            setY(_y);
        },
        getShape,
        setShape,
    };

    return (
        <PlayerPosContext.Provider value={store}>
            {props.children}
        </PlayerPosContext.Provider>
    );
}

export function usePlayerPos() { return useContext(PlayerPosContext); }
