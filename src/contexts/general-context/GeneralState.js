import { useReducer } from "react";
import GeneralContext from "./GeneralContext";
import GeneralReducer from "./GeneralReducer";
import { GET_GITHUB_USER } from "../types";
import { BASE_URL } from "../../utils/baseUrl";
import axios from "axios";

const GeneralState = ({ children }) => {
  const initialState = {
    githubUser: null,
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const getGithubUser = async (username) => {
    const res = await axios.get(`${BASE_URL}/${username}`);
    dispatch({ type: GET_GITHUB_USER, payload: res.data });
  };

  return (
    <GeneralContext.Provider
      value={{
        githubUser: state.githubUser,
        getGithubUser,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
