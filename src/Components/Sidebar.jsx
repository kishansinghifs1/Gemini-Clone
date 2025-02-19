import { assets } from '../Assets/assets';
import "../Styles/Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <img className="menu" src={assets.menu_icon}/>
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className='recent-title'>Recents</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>Krishna The Supreme Lord ...</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                <p>Setting</p>
            </div>            
        </div>
    </div>
  )
}

export default Sidebar
