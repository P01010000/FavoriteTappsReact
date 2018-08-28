import React from 'react';
import PropTypes from 'prop-types';
import SearchHead from './SearchHead';
import ResultList from './ResultList';
import { ITEMS_PER_REQUEST } from '../../constants/settings';
import './SearchContainer.scss';
import fetchSites from '../../utils/fetchSites';

class SearchContainer extends React.Component {
  static propTypes = {
    defaultSearch: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      tapps: [],
      reachedEnd: true,
      start: 0,
      take: ITEMS_PER_REQUEST,
      defaultSearch: props.defaultSearch,
      searchString: props.defaultSearch,
    };
    this.loadNewData = this.loadNewData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  componentDidMount() {
    this.loadNewData(this.state.defaultSearch);
  }

  async loadNewData(searchString) {
    this.loadSiteData(searchString || this.state.defaultSearch, 0, this.state.take, false);
  }

  async loadMoreData() {
    this.loadSiteData(this.state.searchString, this.state.start, this.state.take, true);
  }

  async loadSiteData(searchString, start, take, append) {
    try {
      const result = await fetchSites(searchString, start, take);
      this.setState({
        tapps: append ? this.state.tapps.concat(result.sites) : result.sites,
        searchString,
        start: start + result.sites.length,
        reachedEnd: result.reachedEnd
       });
    } catch (err) {
      this.setState({});
    }
  }

  render() {
    return (
      <div className="accordion accordion--open" data-group="site" style={{ overflow: 'hidden', marginTop: '30px' }} >
        <SearchHead callback={this.loadNewData} />
        <ResultList tapps={this.state.tapps} callback={this.loadMoreData} reachedEnd={this.state.reachedEnd} />
      </div>
    );
  }
}

export default SearchContainer;
