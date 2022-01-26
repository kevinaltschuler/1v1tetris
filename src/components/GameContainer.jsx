import { onValue, ref } from 'firebase/database';
import { createEffect, createSignal, For } from 'solid-js';
import { db } from '../data/firebase';
import { useGameId } from '../data/gameId';
import { IDForm } from './IDForm';
import OtherPlayer from './OtherPlayer';
import Player from './Player';

//TODO:
// make it so every room uses a list of players instead of ids to x and y

export const GameContainer = () => {
    const { id } = useGameId();

    const [players, setPlayers] = createSignal([]);

    createEffect(() => {
        const allPlayers = ref(db, `/${id()}`);

        onValue(allPlayers, (snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                setPlayers(Object.keys(snapshot.val()));
            } else {
                console.log('No data available');
            }
        });
        // onValue(allPlayers, (snapshot) => {
        //     console.log('', snapshot.val())
        // });
    });

    return <>{id() ?
        <div>

            <Player />
            <For each={players()}>
                {(player, _i) => <OtherPlayer id={player} />}
            </For>

        </div >
        : <IDForm />}</>;
};