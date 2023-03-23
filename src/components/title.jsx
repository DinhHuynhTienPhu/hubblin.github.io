import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Game Developer</h1>
        <div className="line"></div>
        <h1>Đinh Huỳnh Tiến Phú</h1>
        {/* <h2>Who am I?</h2> */}
        <h4>
          Software Engineer with <b style={{ color: 'orange' }}>3+ years working as game developer.</b>
          <br />
          Have some experience in <b style={{ color: 'orange' }}>web, mobile and desktop </b> development.
          <br /> Passionate about game industry and always looking for new challenges.
        </h4>
      </div>
    </section>
  );
});

export default Title;
