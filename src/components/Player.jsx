import { createEffect, createSignal, onMount } from 'solid-js';
import { styled } from 'solid-styled-components';
import { usePlayerPos } from '../data/PlayerPosProvider';

const PlayerSquare = styled('div')`
    width: 10px;
    height: 10px;
    background-color: black;
    position: absolute;
    left: ${(props) => props.x * 10 + 0}px;
    top: ${(props) => props.y * 10 + 0}px;
`;

const Player = () => {
    const {
        getX, getY, setX, setY,
    } = usePlayerPos();

    onMount(() => {
        console.log('on mount');
        document.addEventListener('keydown', (evt) => {
            console.log(evt.key);
            switch (evt.key) {
                case 'ArrowLeft':
                    setX(getX() - 1);
                    console.log(getX());
                    break;
                case 'ArrowRight':
                    setX(getX() + 1);
                    console.log('right');
                    break;
                case 'ArrowUp':
                    setY(getY() - 1);
                    console.log('up');
                    break;
                case 'ArrowDown':
                    setY(getY() + 1);
                    console.log('down');
                    break;
            }
        });
    });

    return <PlayerSquare x={getX()} y={getY()} />;
};

export default Player;
