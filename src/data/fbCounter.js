import { db } from "./firebase";
import { onValue, ref, set } from "firebase/database";

const localId = 123;

export function writeCount(count) {
    set(ref(db, 'count/' + localId), count);
}

const countRef = ref(db, 'count/' + localId);
onValue(countRef, (snapshot) => {
    console.log('hello: ', snapshot)
});