import React, { memo,useState } from "react";

import "../styles/portfolio.scss";
import paint from "../images/paint.png";
import pickup from "../images/pickups.png";
import note from "../images/note.gif";
import picker from "../images/picker.gif";
import word from "../images/word.jpg";
import popol from "../images/popol.png";
import {
    ReactJs,
    Redux,
    Reduxsaga,
    Sass,
    Javascript,
    Html5,
    CssThree,
    Nodedotjs,
    Express,
    Mysql,
    R,
    Mongodb,
} from "@icons-pack/react-simple-icons";
const SkillGroup = memo(({ refs,icon,name,description,bgColor }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="skill-group tooltip-wrapper"
           
            onMouseLeave={() => setShowTooltip(false)}>
            <div className="skill" style={{
                backgroundColor: bgColor,
            }}
                onMouseEnter={() => setShowTooltip(true)}
            >
                {/* <Html5 color="#E34F26" size={50} /> */}
                {icon}
            </div>
            <p className="skill-info target">{name}</p>
            <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                {description}
            </div>
        </div>
    );
});

export default SkillGroup;
