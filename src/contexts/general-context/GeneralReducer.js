import { GET_GITHUB_USER, GET_GITHUB_USER_REPOS } from "../types";

const GeneralReducer = (prevState, { type, payload }) => {
  switch (type) {
    case GET_GITHUB_USER:
      return {
        ...prevState,
        githubUser: payload,
      };
    case GET_GITHUB_USER_REPOS:
      return {
        ...prevState,
        githubUserRepos: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;
