import React from 'react';
import SearchHead from './SearchHead';
import ResultList from './ResultList';
import { ITEMS_PER_REQUEST } from '../../constants/settings';
import './SearchContainer.scss';

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tapps: [],
      reachedEnd: true,
      start: 0,
      take: ITEMS_PER_REQUEST
    }
    this.loadNewData = this.loadNewData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  loadNewData({ target: { value: searchString } }) {
    console.log(searchString);
    this.setState({ tapps: [] });
  }

  loadMoreData() {
    console.log("hi");
    this.setState({ tapps: [] });
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
