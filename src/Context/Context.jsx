import { createContext } from "react";
import { useState } from "react";
import run from './../Backend/ApiKey';
export const Context = createContext();
const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async () => {
        setResultData("")
        setLoading(true);
        setShowResult(true);
        const response = await run(input);
        setResultData(response);
        setLoading(false);
        setInput(""); 
    }
    
    const contextValue = {
        input, setInput , setRecentPrompt , recentPrompt , prevPrompts, setPrevPrompts , showResult, setShowResult, loading, setLoading,resultData,setResultData,onSent
    }
   return(
    <Context.Provider value = {contextValue} >
        {props.children}
    </Context.Provider>
   ) 
}
export default ContextProvider;