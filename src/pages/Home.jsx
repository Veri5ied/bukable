import { useContext, useEffect, useState } from "react";
import { BiSearch, BiUser, BiGroup } from "react-icons/bi";
import EmptyState from "../components/empty-state/EmptyState";
import Card from "../components/cards/Card";
import GeneralContext from "../contexts/general-context/GeneralContext";
import NoRepoIcon from "../assets/Union.svg";
import { REPO_PER_PAGE } from "../utils/constants";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { githubUser, githubUserRepos } = useContext(GeneralContext);
  const [userRepos, setUserRepos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    const endOffset = pageOffset + REPO_PER_PAGE;
    setUserRepos(githubUserRepos.slice(pageOffset, endOffset));
    setPageNumber(Math.ceil(githubUserRepos.length / REPO_PER_PAGE));
  }, [githubUserRepos, pageOffset]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * REPO_PER_PAGE) % githubUserRepos.length;
    setPageOffset(newOffset);
  };

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
                    {userRepos.length !== 0 &&
                      userRepos.map((repo, idx) => (
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
                  <div className="pagination--container">
                    <div className="pagination-count">
                      {pageOffset + REPO_PER_PAGE} of {githubUserRepos.length}{" "}
                      items
                    </div>
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageNumber}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                      breakClassName={"page-item"}
                      breakLinkClassName={"page-link"}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
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
