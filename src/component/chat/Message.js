import React from "react";
import { auth } from "../firebase/firebase-config";

const Message = ({ text, name, id }) => {
  const style = {
    message:
      "flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full",
    name: " absolute mt-[-4rem] text-gray-600 text-xs",
    sent: "bg-[#AE04B4] text-white flex-row-reverse text-end float-right rounded-bl-full",
    received: "bg-[#e5e5ea] text-black float-left rounded-br-full",
  };

  const MsgClass =
    id === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;
  console.log(id);

  return (
    <div>
      <div className={`${style.message} ${MsgClass}`}>
        <p className={style.name}>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
