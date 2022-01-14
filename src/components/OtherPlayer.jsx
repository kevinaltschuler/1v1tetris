import { styled } from "solid-styled-components";
import { createSignal, createContext, useContext, createEffect, onMount } from "solid-js";
import { onValue, ref } from "firebase/database";
import { db } from "../data/firebase";
import { playerId, useGameId } from "../data/gameId";

const PlayerSquare = styled('div')`
    width: 10px;
    height: 10px;
    background-color: black;
    position: absolute;
    left: ${props => props.x * 10 + 0}px;
    top: ${props => props.y * 10 + 0}px;
`

const OtherPlayer = (props) => {
    const [x, setX] = createSignal(0)
    const [y, setY] = createSignal(0)

    const { id } = useGameId()

    createEffect(() => {
        const playerPos = ref(db, `/${id()}/${props.id}`);

        onValue(playerPos, (snapshot) => {
            console.log('', snapshot.val())
            setX(snapshot.val().x)
            setY(snapshot.val().y)
        });
    })



    return <PlayerSquare x={x()} y={y()} />
}

export default OtherPlayer;