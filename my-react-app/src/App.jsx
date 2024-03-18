import React, { useState } from 'react';
import Logo from "./Logo";


const sliderValueToColor = (value) => Math.round((value / 100) * 255);

function App() {

  const [sliderValue, setSliderValue] = useState(50); // Starts in the middle
  const [fontFamily, setFontFamily] = useState('"Arial", sans-serif'); // Default font
 
  const textColor = `rgb(${sliderValueToColor(sliderValue)}, ${sliderValueToColor(sliderValue)}, ${sliderValueToColor(sliderValue)})`;

  // Use inline styles to dynamically update CSS variables
  const style = {
    '--black': textColor,
    '--white': `rgb(${255 - sliderValueToColor(sliderValue)}, ${255 - sliderValueToColor(sliderValue)}, ${255 - sliderValueToColor(sliderValue)})`,
    fontFamily: fontFamily
  };

  return (
    <div style={style}>
      <div id='logo'>
      <Logo />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
      <div>
        <button onClick={() => setFontFamily('"Arial", sans-serif')}>Arial</button>
        <button onClick={() => setFontFamily('"Times New Roman", serif')}>Times New Roman</button>
        <button onClick={() => setFontFamily('"Courier New", monospace')}>Courier New</button>
      </div>
    </div>
  );
}

export default App;

