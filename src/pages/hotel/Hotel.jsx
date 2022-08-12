import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://blockchainsimplified.com/blog/mongodb-introduction/mongodb-introduction-features.jpg",
    },
    {
      src: "https://www.quikieapps.com/blog/wp-content/uploads/2020/07/reactjs-features.jpg",
    },
    {
      src: "https://www.testgorilla.com/wp-content/uploads/2022/07/What_are_the_main_features_of_Vue.js.jpg",
    },
    {
      src: "https://www.tutorialspoint.com/nodejs/images/nodejs_concepts.jpg",
    },
    {
      src: "https://www.milesweb.in/blog/wp-content/uploads/2020/09/features-express-js-min.jpg",
    },
    {
      src: "https://www.besanttechnologies.com/wp-content/uploads/2019/12/angular-features.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Post Graduate Program In Full Stack Web Development</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Ranked No.1 Best Coding Bootcamp</span>
          </div>
          <span className="hotelDistance">
          Build a complete profile from scratch
          </span>
          <span className="hotelPriceHighlight">
          Need to fast-track your career in full stack web development? With our comprehensive course curriculum, you will cover Angular, Spring Boot, Hibernate, Servlets and JSPs, MVC, JavaScript (including iQuery and Node.js), MongoDB, and many more cutting edge topics.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">ThinkBig works to provide a fully immersive experience for a tight-knit group of students learning the latest trends in web development.</h1>
              <p className="hotelDesc">
              Accelerate your career as a software developer through this Post Graduate Program in Full Stack Web Development course in collaboration with Veltech CTME. In just a few months, you'll learn modern coding techniques with bootcamp-level intensity and gain all you need to be a full-stack technologist.
              Admission Fee & Financing
The admission fee for this full stack web development certification program is ₹ 20,000 (Incl. taxes)

Financing Options
We are dedicated to making our programs accessible. We are committed to helping you find a way to budget for this program and offer a variety of financing options to make it more economical.
              </p>
              <p className="hotelDesc">
              Apply industry-oriented case studies
Build 10+ real-life projects with case studies evaluated by mentors.
              </p>
              <p className="hotelDesc">
              Learn from Software Engineering experts
Get mentored by the country's best academicians in software engineering and interact with ThinkBIG faculty
              </p>
              <p className="hotelDesc">
              Choose a specialization path in either Cloud computing or Python for Data Science as per your career aspirations and learning interests.
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>ThinkBig's JobAssist helps you get noticed by top hiring companies</h1>
              <span>
              This program will give you the foundation for building full stack web apps using the Java programming language. You'll begin with the basics of JavaScript, and then venture into some of the more advanced concepts like Angular, Spring Boot, Hibernate, JSPs, and MVC. 
              Now is a perfect time to get started on your career as a full stack web developer!
              </span>
              <h2>
                <b>20 lesson-end and 5 phase-end projects</b> (8X higher interaction in live online classes conducted by industry experts)
              </h2>
              <button>Reserve or Apply Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
