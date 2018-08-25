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
      take: ITEMS_PER_REQUEST,
      searchString: 'chayns',
    };
    this.loadNewData = this.loadNewData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  async loadNewData(searchString) {
    chayns.showWaitCursor();
    let result = {};
    this.state.searchString = searchString.length > 0 ? searchString : 'chayns';
    try {
      result = await this.fetchData(this.state.searchString, 0, this.state.take);
      this.setState({
        tapps: result.tapps,
        start: result.tapps.length,
        reachedEnd: result.reachedEnd
      })
    } catch (err) {
      this.setState({});
    }
    chayns.hideWaitCursor();
  }

  async loadMoreData() {
    chayns.showWaitCursor();
    let result = {};
    try {
      result = await this.fetchData(this.state.searchString, this.state.start, this.state.take);
      this.setState({
        tapps: this.state.tapps.concat(result.tapps),
        start: this.state.start + result.tapps.length,
        reachedEnd: result.reachedEnd
      })
    } catch (err) {
      this.setState({});
    }
    chayns.hideWaitCursor();
  }

  async fetchData(searchString, start, take) {
    let { Data } = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${start}&Take=${take}`).then((res) => {
      if (!res.ok) throw new Error(`${res.status}\n${res.statusText}`);
      return res.json();
    });
    if (Data === null) Data = [];

    return { tapps: Data, reachedEnd: Data.length < this.state.take };
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
