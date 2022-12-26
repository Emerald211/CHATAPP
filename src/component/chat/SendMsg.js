import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { auth } from "../firebase/firebase-config";
import { db } from "../firebase/firebase-config";

const style = {
  form: `h-14 w-[97%] lg:w-[78%] max-w-full  flex text-xl fixed bottom-0`,
  input: `w-full text-xl p-3 bg-[#FFF5FF]  text-black outline-none border-none`,
  button: `w-[20%] flex items-center justify-center bg-[#AE04B4] text-white font-bold`,
};

const SendMsg = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input === "") {
      alert("Pls put in a valid message");
      return;
    }

    const { uid, displayName } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      name: displayName,
      uid,
      text: input,
      date: serverTimestamp(),
    });

    setInput("");

    scroll.current.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <div>
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          placeholder="Type your message here..."
        />
        <button className={style.button} type="submit">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default SendMsg;
