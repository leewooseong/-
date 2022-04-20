import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>1. Toggle.js</h1>
            <Toggle />
            <h1>2. Tab.js</h1>
            <Tab />
            <h1>3. Slider.js</h1>
            <Slider />
            <h1>4. Input.js</h1>
            <Input />
        </div>
    );
}

export default App;
