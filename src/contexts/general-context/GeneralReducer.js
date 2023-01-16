import { GET_GITHUB_USER } from "../types";

const GeneralReducer = (prevState, { type, payload }) => {
  switch (type) {
    case GET_GITHUB_USER:
      return {
        ...prevState,
        githubUser: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;
