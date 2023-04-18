import './App.css'
import MapIframe from "./component/mapIframe.jsx";
import {useState} from "react";

function App() {
    const BTN = [
        {name: '等级'},
        {name: '雷电'},
        {name: '大风'},
        {name: '降水'},
        {name: '雷达'},
        {name: '温度'},
        {name: '站点'},
        {name: '防区'},
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    return <div className='App'>
        <div className='btn_wrapper'>
            {
                BTN.map((it, index) => (
                    <div key={it.name} className={`btn ${index === currentIndex ? 'active' : ''}`} onClick={() => {
                        setCurrentIndex(index)
                    }
                    }>{it.name}</div>
                ))
            }
        </div>
        <MapIframe/>
    </div>
}

export default App
