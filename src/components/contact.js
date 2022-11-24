import "../styles/contact.css";
import SideBar from "../components/sidebar";


const Contact = () => {
  
  return (
    <div className="contact">
      <SideBar />
      <div className="details">
        <h1>Contact Us</h1>
        <h4>
          Please feel free to ask any questions related to our Courses,
          Branches, Batches, Trainers or any other general queries. Our team
          will respond to all your queries within 24hrs.
        </h4>
      </div>

      

      <div className="add">
        <div className="one">
        <h1>Bengaluru-Basavanagudi</h1> 
        <h4>
          18,1st floor, Brigade Seshmahal, F1, Vasavi Temple St,
          Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004
        </h4>
        <h3>+91-9686995511</h3>
        </div>
          
        <div className="two">
        <h1>Bengaluru-BTM</h1>
        <h4>
          QSpiders, No. 8 Bannerghatta Road, JP Nagar, 3rd Phase, Bengaluru
          Opposite Vega city Mall
        </h4>
        <h3>+91-9980600500</h3>
        </div>

        <div className="three">
        <h1>Pune-HadapSar</h1>
        <h4>
          7th & 8th floor, Kumar Primus 98/A, National Highway 9, Hadapsar
          Industrial Estate, Hadapsar, Pune, Maharashtra 411013
        </h4>
        <h3>+91-9113640647</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
