import './App.css';
import gptlogo from './assets/chatgpt.svg';
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
           <div className="upperSideTop">
            <img src={gptlogo} alt="LOGO" className="logo"/>
            <span className="brand">
              Chatgpt
            </span></div>
            <button className="midbtn"> <img src="" alt="" className="addbtn"/>New Chat</button>
           <div className="upperSidebottom">
            <button className="query"><img src="" alt=""/> what is programming?</button>
             <button className="query"><img src="" alt=""/> what is programming?</button>

           </div>
        </div>
        <div className="lowerSide">

        </div>


      </div>
    </div>
  );
}

export default App;
