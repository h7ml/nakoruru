import ImageNode from "@/components/ReactFlow/Node/components/ImageNode";
import React from "react";
import ReactFlow, { Background, MiniMap, Controls } from "react-flow-renderer";

const elements = [
  {
    id: "Title",
    type: "image", // input node
    data: {
      label: "Rohan Agarwal",
      imagePath: "/assets/SelfPortrait.png",
      height: 600,
    },
    position: { x: 20, y: 20 },
    style: { fontSize: 48, width: 500 },
  },
  {
    id: "LinkedIn",
    type: "image",
    data: {
      label: "LinkedIn",
      link: "https://linkedin.com/in/r-agarwal",
      imagePath: "/assets/PortraitPhoto.jpeg",
      height: 200,
      width: 200,
    },
    position: { x: 1000, y: 200 },
  },
  {
    id: "Email",
    type: "image", // output node
    data: {
      label: "Email",
      link: "https://us6.list-manage.com/contact-form?u=a5d513a7641adabd212fc49e3&form_id=c27dc84f3921e89d6c9d64a3f597c553",
    },
    position: { x: 1000, y: 110 },
  },
  {
    id: "GitHub",
    type: "image", // output node
    data: { label: "GitHub", link: "https://github.com/roaga" },
    position: { x: 990, y: 40 },
  },
  {
    id: "About Me",
    type: "default", // output node
    data: {
      label:
        "I'm a CS major at Georgia Tech with experience and recognition in a variety of software, from avionics for liquid-fueled rockets to published computer vision research to natural language processing for corporate innovation labs. I'm always looking for new opportunities to make an impact with software. Follow the paths to learn more!",
    },
    position: { x: 700, y: 500 },
    style: { width: 300 },
  },
  {
    id: "YJSP",
    type: "image", // output node
    data: {
      label:
        "Building the master flight software in C++ for the student team aiming to become the first ever to launch a liquid-fueled rocket to space--the Yellow Jacket Space Program.",
      link: "https://www.gtspaceprogram.com",
      imagePath: "/assets/projects/Test+Fire.jpg",
      height: 400,
      width: 400,
    },
    position: { x: 1700, y: 900 },
  },
  {
    id: "Notitia",
    type: "image", // output node
    data: {
      label:
        "Co-founded Notitia, a startup building NLP conversation analysis tools to de-risk new corporate innovation ventures. Georgia Tech CREATE-X and Grand Challenges.",
      link: "https://notitiaworks.com",
      imagePath: "/assets/projects/Notitia.png",
      height: 400,
      width: 400,
    },
    position: { x: 1200, y: 900 },
  },
  {
    id: "VGDev",
    type: "image", // output node
    data: {
      label: "Building custom AI and graphics systems for Georgia Tech VGDev.",
      link: "https://vgdev.gtorg.gatech.edu",
      imagePath: "/assets/projects/StarIsGone.png",
      height: 400,
      width: 400,
    },
    position: { x: 1700, y: 1400 },
  },
  {
    id: "Hackathons",
    type: "image", // output node
    data: {
      label:
        "Multiple cool hackathon projects (and wins) with a variety of tech stacks, from SKLearn to React to Node to IBM Watson.",
      link: "https://devpost.com/roaga",
      height: 200,
      width: 300,
    },
    position: { x: 1600, y: 600 },
  },
  {
    id: "GoogleDSC",
    type: "image", // output node
    data: {
      label:
        "Selected as project lead for the Google DSC and led a team in the 2021 Google Solution Challenge to build a gamified React Native/Google Cloud/Firebase app for social activism.",
      imagePath: "/assets/projects/dsc-logo-2.png",
      height: 400,
      width: 400,
    },
    position: { x: 2000, y: 300 },
  },
  {
    id: "Kore.ai",
    type: "image", // output node
    data: {
      label:
        "Interned at an industry-leading enterprise conversational AI company, building intelligent chatbots to demonstrate company value to clients.",
      imagePath: "/assets/KoreaiBot.png",
      link: "https://kore.ai",
      height: 200,
      width: 1000,
    },
    position: { x: -400, y: 1500 },
  },
  {
    id: "Research",
    type: "image", // output node
    data: {
      label:
        "Researched the relationship between neural networks and human visual development from birth. Co-authored published work, NYCSEF finalist, JSHS semifinalist. Also did some autonomous robotics research.",
      imagePath: "/assets/BlurredImages.png",
      link: "https://jov.arvojournals.org/article.aspx?articleid=2771800",
      height: 500,
      width: 1000,
    },
    position: { x: -300, y: 2000 },
  },
  {
    id: "Frontend",
    type: "default", // output node
    data: { label: "Frontend (JavaScript, ReactJS, React Native, Figma)" },
    position: { x: -700, y: 500 },
    style: { width: 300 },
  },
  {
    id: "Backend",
    type: "default", // output node
    data: {
      label:
        "Backend (JavaScript, Python, Node.js, Express.js, Flask, Firebase, MongoDB)",
    },
    position: { x: -1000, y: 700 },
    style: { width: 300 },
  },
  {
    id: "Cloud",
    type: "default", // output node
    data: { label: "Cloud (AWS, Google Cloud, Heroku, IBM Watson)" },
    position: { x: -1200, y: 400 },
    style: { width: 300 },
  },
  {
    id: "AI/ML",
    type: "default", // output node
    data: { label: "AI/ML (TensorFlow, PyTorch, SKLearn, Jupyter, OpenCV)" },
    position: { x: -600, y: 800 },
    style: { width: 300 },
  },
  {
    id: "MiscSkills",
    type: "default", // output node
    data: { label: "Misc. (Java, C#, Unity, C++, C, HTML/CSS, Assembly)" },
    position: { x: -700, y: 1000 },
    style: { width: 300 },
  },
  {
    id: "Art1",
    type: "image", // output node
    data: {
      label:
        "Here's a bit of my art since you're scrolling around. I studied art through a 4-year scholarship at the Henry and Gilda Block School of the Arts in NYC. I won multiple Scholastic awards and has my work displayed at the Met Museum.",
      imagePath: "/assets/art/BottleFace.jpg",
      height: 800,
      width: 1000,
    },
    position: { x: 2500, y: 2000 },
  },
  {
    id: "Art2",
    type: "image", // output node
    data: { imagePath: "/assets/art/Ballet.jpg", height: 800, width: 400 },
    position: { x: 3400, y: 2000 },
  },
  {
    id: "Art3",
    type: "image", // output node
    data: {
      imagePath: "/assets/art/CentralPark.jpg",
      height: 700,
      width: 1000,
    },
    position: { x: 2900, y: 2900 },
  },
  {
    id: "Art4",
    type: "image", // output node
    data: {
      imagePath: "/assets/art/DigitalCollage.jpg",
      height: 700,
      width: 1000,
    },
    position: { x: 1800, y: 2700 },
  },
  // edges
  {
    id: "1",
    source: "Title",
    target: "LinkedIn",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "2",
    source: "Title",
    target: "Email",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
    label: "Contact me!",
  },
  {
    id: "3",
    source: "Title",
    target: "GitHub",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "4",
    source: "Title",
    target: "About Me",
    animated: true,
    labelStyle: { fill: "#42ad9d", fontWeight: 700, fontSize: 16 },
    label: "About me...",
  },
  {
    id: "5",
    source: "About Me",
    target: "Notitia",
    animated: true,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
    label: "Things I'm currently working on...",
  },
  {
    id: "6",
    source: "Notitia",
    target: "YJSP",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "7",
    source: "YJSP",
    target: "VGDev",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "8",
    source: "About Me",
    target: "Hackathons",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
    label: "Things I've already done...",
  },
  {
    id: "9",
    source: "Hackathons",
    target: "GoogleDSC",
    animated: true,
    labelStyle: { fill: "#f6ab6c", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "10",
    source: "About Me",
    target: "Kore.ai",
    animated: true,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
    label: "Experiences I've had...",
  },
  {
    id: "11",
    source: "Kore.ai",
    target: "Research",
    animated: true,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "12",
    source: "Notitia",
    target: "Frontend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "13",
    source: "Hackathons",
    target: "Frontend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "14",
    source: "GoogleDSC",
    target: "Frontend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "15",
    source: "Notitia",
    target: "Backend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "16",
    source: "Hackathons",
    target: "Backend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "17",
    source: "GoogleDSC",
    target: "Backend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "18",
    source: "Kore.ai",
    target: "Backend",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "19",
    source: "Notitia",
    target: "Cloud",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "20",
    source: "Hackathons",
    target: "Cloud",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "21",
    source: "Hackathons",
    target: "AI/ML",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "22",
    source: "Notitia",
    target: "AI/ML",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "23",
    source: "Kore.ai",
    target: "AI/ML",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "24",
    source: "Research",
    target: "AI/ML",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "25",
    source: "VGDev",
    target: "AI/ML",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "26",
    source: "VGDev",
    target: "MiscSkills",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
  {
    id: "27",
    source: "YJSP",
    target: "MiscSkills",
    animated: false,
    labelStyle: { fill: "#c23613", fontWeight: 700, fontSize: 16 },
  },
];

export function About() {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <div style={{ height: 1000 }}>
        <ReactFlow
          elements={elements}
          nodeTypes={{
            image: ImageNode,
          }}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default About;
