import { onValue, ref, set } from 'firebase/database';
import { db } from './firebase';
import { playerId } from './gameId';

export function writePlayerPos(pos, id) {
    set(ref(db, `${id}/${playerId}`), pos);
}
