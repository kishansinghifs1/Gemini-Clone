import '../Styles/Main.css';
import { assets } from '../Assets/assets';
import { useContext } from 'react';
import { Context } from '../Context/Context';
const Main = () => {
  const { input, setInput , setRecentPrompt , recentPrompt , prevPrompts, setPrevPrompts , showResult, setShowResult, loading, setLoading,resultData,setResultData,onSent
  } = useContext(Context);
  return (
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="User  Icon" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest Beautiful Places To See On An Upcoming Road Trip</p>
              <img src={assets.compass_icon} alt="Compass Icon" />
            </div>
            <div className="card">
              <p>Summarize The Concept Of Urban Planning?</p>
              <img src={assets.bulb_icon} alt="Light Bulb Icon" />
            </div>
            <div className="card">
              <p>Brainstorm Team Bonding Activities For Our Work Retreat</p>
              <img src={assets.message_icon} alt="Message Icon" />
            </div>
            <div className="card">
              <p>Improve The Readability Of The Following Code</p>
              <img src={assets.code_icon} alt="Code Icon" />
            </div> 
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Ask Gemini" aria-label="Ask Gemini" />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Microphone Icon" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="Send Icon" />
            </div>
            </div>
            <p className='bottom-info'>
              Gemini may display inaccurate info, including about people, places, and things, so double-check its responses.
            </p>
        </div>
      </div>
      </div>
  );
}

export default Main;