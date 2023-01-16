import { BsGithub } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const TopNavigation = () => {
  return (
    <div className="topnavigation">
      <div className="topnavigation-sec">
        <BsGithub size={33} cursor="pointer" color="#fff" />
        <div className="input-container">
          <CiSearch className="search-icon" size={22} fontWeight="bold" />
          <input
            type="text"
            className="input-field"
            placeholder="Enter GitHub username"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
