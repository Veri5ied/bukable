import { useReducer } from "react";
import GeneralContext from "./GeneralContext";
import GeneralReducer from "./GeneralReducer";
import { GET_GITHUB_USER, GET_GITHUB_USER_REPOS } from "../types";
import { BASE_URL } from "../../utils/baseUrl";
import axios from "axios";

const GeneralState = ({ children }) => {
  const initialState = {
    githubUser: [],
    githubUserRepos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const getGithubUser = async (username) => {
    const res = await axios.get(`${BASE_URL}/${username}`);
    if (res.status === 200) {
      dispatch({
        type: GET_GITHUB_USER,
        payload: res.data,
      });
      getUserRepos(username);
    } else {
      console.log("Error");
    }
  };

  const getUserRepos = async (username) => {
    const res = await axios.get(`${BASE_URL}/${username}/repos`);
    if (res.status === 200) {
      dispatch({
        type: GET_GITHUB_USER_REPOS,
        payload: res.data,
      });
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        githubUser: state.githubUser,
        githubUserRepos: state.githubUserRepos,
        getGithubUser,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
