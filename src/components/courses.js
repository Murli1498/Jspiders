import SideBar from "../components/sidebar";
import "../styles/courses.css";

const Courses = () => {
  return (
    <div className="courses">
      <SideBar />
      <h1>Courses</h1>
      <h3>The Largest Selection Of Java Courses</h3>
      <div className="ek">
        <div className="do">
          <h2>
            Java Full Stack{" "}
            <img
              id="a"
              src="https://api.qspiders.com/media/course_images/java_WHh6rBH.png"
              alt=""
            />{" "}
            <img
              id="b"
              src="https://api.qspiders.com/media/course_images/db_Wwy8rz0.png"
              alt=""
            />{" "}
          </h2>
          <h5>
            Java Full Stack course is more of job-oriented training which is
            designed as per current industry standards. You can start your
            career in IT industry with basic and advance skills. Course will be
            trained by top industry experts who have passion to train students
            and help them get job in IT industry or excel in IT industry.
          </h5>
        </div>
        <div className="teen">
          <h2>
            MERN Stack{" "}
            <img
              id="d"
              src="https://api.qspiders.com/media/course_images/express-js_yxwjIVY.png"
              alt=""
            />{" "}
            <img
              id="e"
              src="https://api.qspiders.com/media/course_images/node-js_a3KAOmA.png"
              alt=""
            />{" "}
            
          </h2>
          <h5>
            Take your career as a web developer to the next level with this
            Full-Stack Web Developer Master’s Program, where you’ll become an
            expert at front and back-end JavaScript technologies of the most
            popular MEAN (Mongo DB, Express, Angular and Node.js) Stack or MERN
            (Mongo DB, Express, React and Node.js) Stack.
          </h5>
        </div>
        <div className="char">
          <h2>
            MEAN Stack{" "}
            <img
              id="g"
              src="https://api.qspiders.com/media/course_images/node-js.png"
              alt=""
            />{" "}
            <img
              id="h"
              src="https://api.qspiders.com/media/course_images/angular_uM9GdSd.png"
              alt=""
            />{" "}
          </h2>
          <h5>
            You will be ready to develop web application, mobile application &
            automation testing, Web designing and full-fledged application
            developing by end of this training.
          </h5>
        </div>
      </div>
      <div className="farm">
        <div className="land">
          <h2>DevOps</h2>
          <h5>
            DevOps is not a tool or a team, it is the process or a methodology
            of using various tools to solve the problems between Developers and
            Operations team, hence the term “Dev-Ops”. The development team
            always had the pressure of completing the old, pending work that was
            considered faulty by the operations team. With DevOps, there is no
            wait time to deploy the code and getting it tested. Hence, the
            developer gets instantaneous feedback on the code, and therefore can
            close the bugs, and can make the code production ready faster!
          </h5>
        </div>
        <div className="agri">
          <h2>Big Data Hadoop <img src="https://api.qspiders.com/media/course_images/Hadoop.png" alt="" /></h2>
          <h5>
            Big data Analytics is the frontier of the IT field and has become
            crucial for almost every business. Big data can provide competitive
            edge advantages and decision making power to the business owners.
            Nowadays the ocean of opportunities is available for the big data
            professionals. As there is an enormous amount of data available
            around the globe, no one wants to miss any important or crucial
            data. In order to collect, preserve and analyze such a huge amount
            of data the business owners need a tool like Big data.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Courses;
