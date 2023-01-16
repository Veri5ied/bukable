import { useContext } from "react";
import { BiSearch, BiUser, BiGroup } from "react-icons/bi";
import EmptyState from "../components/empty-state/EmptyState";
import Card from "../components/cards/Card";
import GeneralContext from "../contexts/general-context/GeneralContext";
import NoRepoIcon from "../assets/Union.svg";

const Home = () => {
  const { githubUser, githubUserRepos } = useContext(GeneralContext);
  return (
    <div className="home">
      {githubUser.length === 0 && (
        <EmptyState
          stateText="Start with searching a GitHub user"
          stateImg={<BiSearch size={100} color="#808080" />}
        />
      )}
      {!githubUser && <EmptyState stateText="User not found" />}
      {githubUser.length !== 0 && (
        <div className="homecontainer__layout">
          <div className="home__layout">
            <div className="home__layout--left">
              <img src={githubUser?.avatar_url} alt={githubUser?.name} />
              <h3>{githubUser?.name}</h3>
              <p>
                <a href={githubUser?.html_url} target="_blank" rel="noreferrer">
                  {githubUser?.login}
                </a>
              </p>
              <div className="profile-groups">
                <div className="groups">
                  <BiGroup /> {githubUser?.followers} followers
                </div>
                <div className="groups">
                  <BiUser /> {githubUser?.following} following
                </div>
              </div>
            </div>
            <div className="home__layout--right">
              <div className="norepostate">
                {githubUserRepos.length === 0 && (
                  <EmptyState
                    stateText="Repository list is empty"
                    stateImg={
                      <img src={NoRepoIcon} alt="No Repo Icon" width="100" />
                    }
                  />
                )}
              </div>
              {githubUserRepos.length !== 0 && (
                <>
                  <div className="home__layout--count">
                    <h3>Repositories ({githubUserRepos.length})</h3>
                  </div>
                  <div className="home__layout--cards">
                    {githubUserRepos.length !== 0 &&
                      githubUserRepos.map((repo, idx) => (
                        <div key={idx}>
                          <Card
                            cardTitle={repo?.name}
                            cardCaption={
                              repo?.description?.length > 100
                                ? repo?.description?.substring(0, 100) + "..."
                                : repo?.description
                            }
                            cardLink={repo?.html_url}
                          />
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
