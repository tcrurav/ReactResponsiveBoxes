import ColorPanel from "../../components/color-panel/ColorPanel";
import ResponsiveBoxes from "../../components/responsive-boxes/ResponsiveBoxes";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <ColorPanel backgroundColor="var(--secondary-color)" />
      <ResponsiveBoxes />
    </div>
  )
}

export default Home;