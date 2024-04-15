import courses from "../../services/courses/courses.js"
import Box from "../box/Box.jsx";
import "./ResponsiveBoxes.css";

function ResponsiveBoxes() {
  return (
    <div className="responsive-boxes-wrapper">
      {
        courses.map((c, index) => <Box key={index} course={c} />)
      }
    </div>
  )
}

export default ResponsiveBoxes;