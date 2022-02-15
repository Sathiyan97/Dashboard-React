import './App.css';
import Sidebar from "./componants/sidebar/sidebar";
import Body from "./componants/body/body"
import Rightside from "./componants/rightside/rightside";

function App() {
    return (
        <div className="App">
            <div className="sidebar-vw">
                <Sidebar/>
            </div>
            <div className="body-vw">
                <Body/>
            </div>
            <div className="rightSide-vw">
                <Rightside/>
            </div>
        </div>
    );
}

export default App;
