import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "./utils/chatSlice";
import generateRandomString, { generateRandomName } from "./utils/helper";

const LiveChat = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const msg = useSelector((store) => store.chat.messages);
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        addChat({
          name: generateRandomName(),
          message: generateRandomString(20),
        })
      );
    }, 10000);
  });
  return (
    <div className="w-4/12">
      <div className="grow border border-gray-100 p-2 ml-2">
        <h3 className="font-bold bg-gray-200 p-2">Chat:</h3>
        <div className="flex items-end flex-wrap content-end flex-row-reverse overflow-y-auto h-[454px]">
          {msg?.map((m, i) => {
            return (
              <div
                className="w-full bg-gray-50 border-b border-b-gray-200 py-1"
                key={i}
              >
                <span>{m.name}: </span>
                <span>{m.message}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border border-gray-300 py-2 flex justify-center ml-2">
        <input
          type="text"
          value={inputVal}
          className="w-8/12 border border-gray-200 px-2"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="bg-gray-200 py-1 w-3/12"
          onClick={() =>
            dispatch(
              addChat({
                name: "Deepak",
                message: inputVal,
              })
            )
          }
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
