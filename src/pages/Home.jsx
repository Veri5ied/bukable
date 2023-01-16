import { BiSearch, BiUser, BiGroup } from "react-icons/bi";
import EmptyState from "../components/empty-state/EmptyState";
import SampleImg from "../assets/sampleuser.png";
import Card from "../components/cards/Card";

const Home = () => {
  return (
    <div className="home">
      <div className="homecontainer__layout">
        <div className="home__layout">
          <div className="home__layout--left">
            <img src={SampleImg} alt="" />
            <h3>Dan Abramov</h3>
            <p>gaearon</p>
            <div className="profile-groups">
              <div className="groups">
                <BiGroup /> 65.8k followers
              </div>
              <div className="groups">
                <BiUser /> 1.2k following
              </div>
            </div>
          </div>
          <div className="home__layout--right">
            <div className="home__layout--cards">
              <Card
                cardTitle="react-hot-loader"
                cardCaption="Tweak React components in real time. (Deprecated: use Fast Refresh instead."
              />
              <Card
                cardTitle="react-hot-loader"
                cardCaption="Tweak React components in real time. (Deprecated: use Fast Refresh instead."
              />
              <Card
                cardTitle="react-hot-loader"
                cardCaption="Tweak React components in real time. (Deprecated: use Fast Refresh instead."
              />
              <Card
                cardTitle="react-hot-loader"
                cardCaption="Tweak React components in real time. (Deprecated: use Fast Refresh instead."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
