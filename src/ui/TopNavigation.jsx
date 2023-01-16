import { BsGithub } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import GeneralContext from "../contexts/general-context/GeneralContext";

const TopNavigation = () => {
  const { getGithubUser } = useContext(GeneralContext);
  const [username, setUsername] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      getGithubUser(username);
    } else return;
  };

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
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
