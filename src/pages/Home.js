import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Portfolio from "../components/Portfolio";
import Topic from "../components/Topic";
import Qualifications from "../components/Qualifications";
import Contact from "../components/Contact";
import myPic from "../components/myPic.png";
import data from "../data.json";

function Home() {
  const [contact, setContact] = useState([]);
  const [skills, setSkills] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [works, setWorks] = useState([]);
  const [topics, setTopics] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [dataP, setDataP] = useState("");

  useEffect(() => {
    const getResume = async () => {
      localStorage.setItem("data", JSON.stringify(data));
      setDataP(JSON.parse(localStorage.getItem("data")));
    };
    if (!dataP) {
      getResume();
    }
    setContact(dataP?.contact);
    setSkills(dataP?.skills);
    setQualifications(dataP?.describe);
    setWorks(dataP?.works);
    setTopics(dataP?.topics);
    setPortfolios(dataP?.portfolios);
  }, [dataP]);

  return (
    <Container className="home">
      <div className="d-md-flex flex-md-equal w-100 ps-md-3">
        <div className="text-bg-dark pt-3 px-3 ">
          <Contact contact={contact} myPic={myPic}></Contact>
          <br />
          <Skills skills={skills}></Skills>
        </div>
        <div className="text-bg-dark pt-3 px-3 ">
          <Qualifications describe={qualifications}></Qualifications>
          <Work works={works}></Work>
        </div>
      </div>
      <Topic topics={topics}></Topic>
      <Portfolio portfolios={portfolios}></Portfolio>
      <div className="CopyR">
        Copyright © {new Date().getFullYear()} Shotechs@gmail.com
      </div>
    </Container>
  );
}

export default Home;
