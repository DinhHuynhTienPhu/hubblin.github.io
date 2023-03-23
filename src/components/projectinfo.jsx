import React, { memo } from "react";

import "../styles/portfolio.scss";
import paint from "../images/paint.png";
import pickup from "../images/pickups.png";
import note from "../images/note.gif";
import picker from "../images/picker.gif";
import word from "../images/word.jpg";
import popol from "../images/popol.png";

const ProjectInfo = memo(({ refs, name,subname, description,link,image }) => {
    return (
        <div className="portfolio-info-area">
            <div className="portfolio-info">
                <div className="picture-area">
                    <video
                        src={image}
                        alt="video"
                        autoPlay
                        loop
                        muted
                        width={500}
                        max-width={500}
                        height={280}
                        max-height={280}
                    />
                </div>
                <div className="title">{name}</div>
                <div className="contents">
                    {subname}
                    <br />
                    <br />
                    {description}
                </div>
                <a
                    className="button"
                    href={link}
                    target="_blank"
                >
                    Check it
                </a>
            </div>
        </div>
    );
});

export default ProjectInfo;
