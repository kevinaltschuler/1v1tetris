import {
    createEffect, createSignal, onMount, For,
} from 'solid-js';
import { styled } from 'solid-styled-components';
import { shapeMaps, shapeTypes } from '../constants/shapeTypes';
import { usePlayerPos } from '../data/PlayerPosProvider';

const randomProperty = function (obj) {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

const PlayerSquare = styled('div')`
    width: 10px;
    height: 10px;
    background-color: black;
    position: absolute;
    left: ${(props) => props.x * 10 + 0}px;
    top: ${(props) => props.y * 10 + 0}px;
    border: 1px solid white;
`;

const Player = () => {
    const {
        getX, getY, setX, setY, getShape, setShape,
    } = usePlayerPos();

    onMount(() => {
        document.addEventListener('keydown', (evt) => {
            console.log(evt.key);
            switch (evt.key) {
            case 'ArrowLeft':
                setX(getX() - 1);
                break;
            case 'ArrowRight':
                setX(getX() + 1);
                break;
            case 'ArrowUp':
                setY(getY() - 1);
                break;
            case 'ArrowDown':
                setY(getY() + 1);
                break;
            case 'r':
                setShape(randomProperty(shapeTypes));
            default:
                break;
            }
        });
    });

    return <For each={shapeMaps[getShape()]}>
        {(coord, i) => <PlayerSquare x={getX() + coord.x} y={getY() + coord.y} />}
    </For>;
};

export default Player;
