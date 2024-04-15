import "./ColorPanel.css";

function ColorPanel({ backgroundColor }) {
  return (
    <div className="color-panel-wrapper" style={{ backgroundColor: backgroundColor }}></div>
  )
}

export default ColorPanel;