import { Navigate } from "react-router-dom";
import "./searchItem.css";
import { useNavigate } from "react-router-dom";



const SearchItem = () => {


  const navigate = useNavigate();
  const handleme = () => {
    navigate("/hotels/1");
  };
  return (
    <div className="searchItem">
      <img
        src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Full Stack Dev</h1>
        <span className="siDistance">Not just 100% guarantee course, it's a career building program to standout from crowd.</span>
        <span className="siTaxiOp">Free Preview</span>
        <span className="siSubtitle">
        Learn Full Stack Web Development with Node.js with Ample Projects for Hands-on Practice.
        </span>
        <span className="siFeatures">
        Gets hands-on training by building projects like E-commerce platforms
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleme}>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
