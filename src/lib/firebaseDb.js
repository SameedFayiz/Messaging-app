import { db } from "./firebase";
import {
  collection,
  query,
  where,
  onSnapshotdoc,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";

export const createChat = async (selfId, friendId) => {
  try {
    let chatId = selfId > friendId ? friendId + selfId : selfId + friendId;
    await setDoc(doc(db, "chats", chatId), {
      users: [selfId, friendId],
    });
    const docRef = await addDoc(collection(db, `chats/${chatId}/chat`), {
      base: null,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {}
};

export const sendMessage = async (selfId, text) => {
  try {
    let time = new Date();
    let chatId = selfId > friendId ? friendId + selfId : selfId + friendId;
    await setDoc(
      doc(db, "chats", chatId, "chats", `${selfId + time.getTime()}`),
      {
        id: selfId,
        text,
        time: Timestamp.fromDate(time),
      }
    );
  } catch (error) {}
};
