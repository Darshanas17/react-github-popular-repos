import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import LanguageFilterItem from "../LanguageFilterItem";
import RepositoryItem from "../RepositoryItem";
import "./index.css";

const languageFiltersData = [
  { id: "ALL", language: "All" },
  { id: "JAVASCRIPT", language: "Javascript" },
  { id: "RUBY", language: "Ruby" },
  { id: "JAVA", language: "Java" },
  { id: "CSS", language: "CSS" },
];

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class GithubPopularRepos extends Component {
  state = {
    repoList: [],
    activeFilterId: languageFiltersData[0].id,
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getRepos();
  }

  getRepos = async () => {
    const { activeFilterId } = this.state;

    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${activeFilterId}`;

    try {
      const response = await fetch(githubReposApiUrl);

      if (response.ok) {
        const data = await response.json();
        const updatedData = data.popular_repos.map((item) => ({
          name: item.name,
          id: item.id,
          issuesCount: item.issues_count,
          forksCount: item.forks_count,
          starsCount: item.stars_count,
          imageUrl: item.avatar_url,
        }));
        this.setState({
          repoList: updatedData,
          apiStatus: apiStatusConstants.success,
        });
      } else {
        this.setState({ apiStatus: apiStatusConstants.failure });
      }
    } catch (error) {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  onClickLanguageFilter = (id) => {
    this.setState({ activeFilterId: id }, this.getRepos);
  };

  renderRepoList = () => {
    const { repoList } = this.state;
    return (
      <ul className="repo-cont">
        {repoList.map((eachRepo) => (
          <RepositoryItem repositoryData={eachRepo} key={eachRepo.id} />
        ))}
      </ul>
    );
  };

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <p className="failure-message">Something Went Wrong</p>
    </div>
  );

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <TailSpin color="#0284c7" height={80} width={80} />
    </div>
  );

  renderRepos = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRepoList();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    const { activeFilterId } = this.state;
    return (
      <div className="bg-cont">
        <div className="app-cont">
          <h1 className="heading">Popular</h1>
          <ul className="language-cont">
            {languageFiltersData.map((eachLanguage) => (
              <LanguageFilterItem
                eachLanguage={eachLanguage}
                activeFilterId={activeFilterId}
                key={eachLanguage.id}
                onClickLanguageFilter={this.onClickLanguageFilter}
              />
            ))}
          </ul>
          {this.renderRepos()}
        </div>
      </div>
    );
  }
}

export default GithubPopularRepos;
