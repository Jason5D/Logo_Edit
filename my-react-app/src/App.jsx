import React, { useState } from 'react';
import Logo from "./Logo";


const sliderValueToColor = (value) => Math.round((value / 100) * 255);

function App() {

  const [sliderValue, setSliderValue] = useState(50); // Starts in the middle

 
  const textColor = `rgb(${sliderValueToColor(sliderValue)}, ${sliderValueToColor(sliderValue)}, ${sliderValueToColor(sliderValue)})`;

  // Use inline styles to dynamically update CSS variables
  const style = {
    '--black': textColor,
    '--white': `rgb(${255 - sliderValueToColor(sliderValue)}, ${255 - sliderValueToColor(sliderValue)}, ${255 - sliderValueToColor(sliderValue)})`,
  };

  return (
    <div style={style}>
      <Logo />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
    </div>
  );
}

export default App;

