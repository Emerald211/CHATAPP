import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import { db } from "../firebase/firebase-config";
import Message from "./Message";
import SendMsg from "./SendMsg";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const style = {
    main: "flex mt-4 overflow-scroll overflow-x-hidden flex-col h-full pb-[60px] w-full p-[10px] relative",
  };

  const scroll = useRef();

  useEffect(() => {
    //     const q = query(collection(db, 'messages'), orderBy('timestamp'))

    const q = query(collection(db, "messages"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let messages = [];

      querySnapShot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  console.log(messages);

  return (
    <div className={style.main}>
      <main className=" grid gap-2 ">
        {messages &&
          messages.map((eachMessage) => {
            return (
              <Message
                name={eachMessage.name}
                text={eachMessage.text}
                date={eachMessage.date}
                id={eachMessage.uid}
              />
            );
          })}
        <SendMsg scroll={scroll} />
      </main>

      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;
