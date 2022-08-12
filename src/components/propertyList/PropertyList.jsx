import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cdn.educba.com/academy/wp-content/uploads/2019/10/types-of-machine-learning-algorithm.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Machine Learning</h1>
          <h2>12 courses</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://image.slidesharecdn.com/digimarketingsession1-160720153149/85/digi-marketing-session-1-18-320.jpg?cb=1469028724"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Digital Marketing</h1>
          <h2>23 courses</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cdn.ttgtmedia.com/rms/onlineImages/security-white_gray_black_hat_mobile.png"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Ethical Hacking</h1>
          <h2>13 courses</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://global-uploads.webflow.com/59e16042ec229e00016d3a66/613157f891f7741dd99a68b2_data%20visualization%20tips_blog%20listing.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Data Visualisation Using Python</h1>
          <h2>12 courses</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.wikihow.com/images/thumb/5/51/Understand-Probability-Step-2.jpg/v4-460px-Understand-Probability-Step-2.jpg.webp"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Probability and Probability Distribution</h1>
          <h2>10 courses</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
