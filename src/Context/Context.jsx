import { createContext } from "react";
import { useState } from "react";
import run from "./../Backend/ApiKey";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };
  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompts((prev) => [...prev, input]);
    const response = await run(input);
    let responseArray = response.split("**");
    let newArray = "";
    for (let index = 0; index < responseArray.length; index++) {
      if (index == 0 || index % 2 !== 1) {
        newArray += responseArray[index];
      } else {
        newArray += "<b>" + responseArray[index] + "</b>";
      }
    }
    let newArray2 = newArray.split("*").join("</br>");
    let responseArray2 = newArray2.split(" ");

    for (let i = 0; i < responseArray2.length; i++) {
      const nextWord = responseArray2[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    setRecentPrompt,
    recentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
