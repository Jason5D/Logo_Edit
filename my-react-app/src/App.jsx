import React, { useState } from "react";
import Logo from "./Logo";

const sliderValueToColor = (value) => Math.round((value / 100) * 255);

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [fontFamily, setFontFamily] = useState('"Arial", sans-serif');
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  // Calculate gradient colors for the Logo component
  const logoStyle = {
    color: `rgb(${sliderValueToColor(sliderValue)}, ${sliderValueToColor(
      sliderValue
    )}, ${sliderValueToColor(sliderValue)})`,
    backgroundColor: `rgb(${255 - sliderValueToColor(sliderValue)}, ${
      255 - sliderValueToColor(sliderValue)
    }, ${255 - sliderValueToColor(sliderValue)})`,
  };

  // Style for the <p> element
  const pStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
    fontFamily: fontFamily,
  };

  return (
    <div>
      <Logo style={logoStyle} />
      <p style={pStyle}>Atedo</p>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <button onClick={() => setFontFamily('"Arial", sans-serif')}>
          Arial
        </button>
        <button onClick={() => setFontFamily('"Times New Roman", serif')}>
          Times New Roman
        </button>
        <button onClick={() => setFontFamily('"Courier New", monospace')}>
          Courier New
        </button>
      </div>
    </div>
  );
}

export default App;
