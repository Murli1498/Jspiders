import "../styles/home.css";
import SideBar from "../components/sidebar";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="fix">
      <div className="all">
        <h2>
          {" "}
          <img
            src="https://media.istockphoto.com/id/1317063775/photo/planet-earth-globe-north-and-south-america.jpg?s=612x612&w=0&k=20&c=OUx5BhLNdCRtOQ51W0xmnPcHaqJdQLur6Nfns_BH8w4="
            alt=""
          />{" "}
          LARGEST SOFTWARE TRAINING ORGANISATION{" "}
          <img
            src="https://media.istockphoto.com/id/1317063775/photo/planet-earth-globe-north-and-south-america.jpg?s=612x612&w=0&k=20&c=OUx5BhLNdCRtOQ51W0xmnPcHaqJdQLur6Nfns_BH8w4="
            alt=""
          />
        </h2>
        <h3>
          JSpiders is the world’s ace software course training organization with
          an aim to bridge the gap between the demands of the industry and the
          curriculum of educational institutions. With centers across the Globe,
          the institute is a platform where young minds are given the
          opportunity to build successful careers. ”JSpiders is a place where
          businesses find talent and dreams take flight."
        </h3>
      </div>
      <div className="placed">
        <h2>
          <img src="https://media.istockphoto.com/id/1132889696/vector/creative-three-people-icon.jpg?s=612x612&w=0&k=20&c=uYaOwBZK9FiPskDttwS2kUiYJGmfYN0LcYKo0cq9yGg=" alt="" />
           PLACEMENT STATISTICS 
           <img src="https://media.istockphoto.com/id/1132889696/vector/creative-three-people-icon.jpg?s=612x612&w=0&k=20&c=uYaOwBZK9FiPskDttwS2kUiYJGmfYN0LcYKo0cq9yGg=" alt="" />
           </h2>
        <h3> *94860 Placed Students who have throughout 60% aggregate* </h3>
        <h3>*42992 Placed Students who have graduated in Non-IT* </h3>
        <h3>*68481 Placed Students who have graduated in IT/CS/IS* </h3>
        <h3>
          *15024 Placed Students who have less than 60% aggregate in Degree*
        </h3>
      </div>
      </div>
      <div className="total">
      <div className="four">
        <h2>*No.1*</h2>
        <h3>Training Center in the World and also the Largest.</h3>
      </div>
      <div className="five">
        <h2>*3.8 Lakhs*</h2>
        <h3>Students have been Placed, and still counting!</h3>
      </div>
      <div className="six">
        <h2>*3970+*</h2>
        <h3>Multinational companies hire from us, and the list is still growing.</h3>
      </div>
      <div className="seven">
        <h2>*19+*</h2>
        <h3>Companies conduct interviews every working day.</h3>
      </div>
    </div>
    </div>
  );
};

export default Home;
