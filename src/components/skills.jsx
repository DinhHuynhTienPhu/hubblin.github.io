import React, { memo } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from 'antd';
import "../styles/skills.scss";
import SkillGroup from "./skillgroup";

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
  Git,
  Github,
  Csharp,
  Cplusplus,
} from "@icons-pack/react-simple-icons";
import { FaJava } from "react-icons/fa";
const { Meta } = Card;

const cards = [
  {
    title: 'Unity Basics',
    image: 'https://pluralsight.imgix.net/course-images/unity-navigation-fundamentals-v1.jpg',
    description: 'I have been using Unity for nearly five years, which has given me a comprehensive understanding of the Unity basics. I am well- versed in scripting, textures, animation, GUI styles, and more.'
  },
  {
    title: 'C# and OOP',
    image: 'https://www.shekhali.com/wp-content/uploads/2021/12/C-OOP-four-basic-OOPs-concepts-1024x577.png',
    description: 'I have a strong understanding of C# object-oriented programming, including the four principles of OOP and SOLID. Additionally, I am familiar with several basic programming design patterns.'
  },
  {
    title: 'Unity Assets',
    image: 'https://unity3d.com/profiles/unity3d/themes/unity/images/eloqua/article/unity-asset-store-characters.jpg',
    description: 'I have utilized various assets to facilitate rapid game development, including UModeler for 3D modeling, DotTween for quick animations, and PolyFew for optimizing 3D meshes,... and much more.'
  },
  {
    title: 'Game optimization for mobile',
    image: 'https://connect-prd-cdn.unity.com/20200305/learn/images/9485952d-2e18-4bc2-8d4e-ced9ef1badd8_image5.jpg',
    description: 'I have experience in optimizing games for mobile devices, including reducing the size of the game, reducing the number of draw calls, reducing the number of textures used, and optimize meshes.'
  },
  {
    title: 'Hyper Casual Games',
    image: 'https://image.winudf.com/v2/image1/Y29tLm5vc3RlbC5wYXJraW5nLmNhcl9zY3JlZW5fNV8xNjY2ODYwOTM0XzA2OA/screen-5.jpg?fakeurl=1&type=.jpg',
    description: 'I have experience in developing hyper casual games for mobile devices, including the game mechanics, game design, and game development. However, I also want to learn more about the game marketing and AAA game development.'
  },


];

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">
        <h3 className="skill-title">Unity</h3>
        <div className="skills-infos">
          {/* //skillgroup here */}

          <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
            {cards.map((card, index) => (
              <div className="card-container" key={index}>
                <Card
                cover={<img alt="example" src={card.image} />}
                >
                  <Meta title={card.title} description={card.description} />

                  {/* <Card.Body>
                    <Card.Title style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      color: 'black',
                    }}>{card.title}</Card.Title>
                    <Card.Text style={{
                      marginBottom: '10px',
                      color: 'black',
                      marginLeft: '50px',
                      marginRight: '50px',
                      textAlign: 'left',
                    }}>{card.description}</Card.Text>
                  </Card.Body> */}
                </Card>
              </div>
            ))}
          </Slider>

        </div>
        <h3 className="skill-title">Others</h3>
        <div className="skills-infos">
          {/* //skillgroup here */}
          <SkillGroup icon={<ReactJs size={50} color='#61DBFB' />}
            description='I have been using ReactJS for almost a year 
            and have learned the basic concepts about it. I used ReactJS to
             build a website for my graduation project (eWorkbook).' 
            name='ReactJS' />
          
          <SkillGroup icon={<ReactJs size={50} color='#61DBFB' />}
            description='I used React Native to develop a mobile application on two platforms,
             Android and iOS, for my graduation project (eWorkbook).'
            name='React Native' bgColor='#303030' />


          <SkillGroup icon={<Mongodb size={50} color='#499e54' />}
            description='I have been using MongoDB for over 2 years to work on projects at my
             university. I use it with Mongoose to easily access and manage data.'
            name='MongoDB' />
          <SkillGroup icon={<Git size={50} color='#F1502F' />}
            description='I use Git to easily manage my code and collaborate with my peers at university on projects.
             The tools I use with Git are Sourcetree, GitHub Desktop, and VSCode built-in extension.'
            name='Git' />
        </div>
        <h3 className="skill-title" style={{
          marginBottom: '20px',
        }} >Languages</h3>
        <div className="skills-infos"
          
        >
          
          {/* //skillgroup here */}
          <Csharp size={50} color='#5C2D91' style={{
            marginRight: '10px',
            marginLeft: '10px',
          }} />
          <Cplusplus size={50} color='#00599C' style={{
            marginRight: '10px',
            marginLeft: '10px',
          }} />
          <Javascript size={50} color='#F7DF1E' style={{
            marginRight: '10px',
            marginLeft: '10px',
          }} />
          <FaJava size={50} color='red' style={{
            marginRight: '10px',
            marginLeft: '10px',
          }} />
        </div>
      </div>
    </section>
  );
});
export default Skills;
