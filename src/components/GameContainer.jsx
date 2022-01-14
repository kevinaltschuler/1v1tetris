import { child, get, onValue, ref } from "firebase/database";
import { createEffect, createSignal, onMount } from "solid-js";
import { db } from "../data/firebase";
import { useGameId } from "../data/gameId";
import { IDForm } from "./IDForm"
import OtherPlayer from "./OtherPlayer";
import Player from "./Player";

export const GameContainer = () => {
    const { id } = useGameId()

    const [players, setPlayers] = createSignal([])

    createEffect(() => {
        const allPlayers = ref(db, `/${id()}`);

        get(ref(db, `/${id()}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setPlayers(Object.keys(snapshot.val()))
            } else {
                console.log("No data available");
            }
        })
        // onValue(allPlayers, (snapshot) => {
        //     console.log('', snapshot.val())
        // });
    })

    return <>{id() ?
        <div>
            hello nicole
            <br />
            <br />

            <Player />
            <For each={players()}>
                {(player, i) => <OtherPlayer id={player} />}
            </For>

        </div >
        : <IDForm />}</>
}