import { useContext } from "solid-js";
import { styled } from "solid-styled-components";
import { CounterContext } from "../data/CounterProvider";
import { writeCount } from "../data/fbCounter";


const CounterButton = styled("button")``;

const MyButton = () => {
    console.log(useContext(CounterContext))
    const [count, setCount] = useContext(CounterContext)

    return <CounterButton onClick={() => { writeCount(1) }}>yo: {count}</CounterButton>
}

export default MyButton;