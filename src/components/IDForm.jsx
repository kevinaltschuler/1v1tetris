import { createSignal } from "solid-js";
import { useGameId } from "../data/gameId";



export const IDForm = () => {
    const { id, setId } = useGameId();
    const [text, setText] = createSignal('')

    return <>
        <input value={text()} onChange={({ target: { value } }) => setText(value)}></input>

        <button onClick={() => setId(text())}>set id</button>
    </>
}
