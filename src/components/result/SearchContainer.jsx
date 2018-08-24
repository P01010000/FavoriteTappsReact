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

  async loadNewData({ target: { value: searchString } }) {
    chayns.showWaitCursor();
    this.state.start = 0;
    this.state.searchString = searchString.length > 0 ? searchString : 'chayns';
    this.state.reachedEnd = true;
    this.state.tapps = [];
    try {
      await this.fetchData();
    } catch (err) {
      this.setState({});
    }
    chayns.hideWaitCursor();
  }

  async loadMoreData() {
    chayns.showWaitCursor();
    try {
      await this.fetchData();
    } catch (err) {
      this.setState({});
    }
    chayns.hideWaitCursor();
  }

  async fetchData() {
    let { Data } = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.state.searchString}&Skip=${this.state.start}&Take=${this.state.take}`).then((res) => {
      if (!res.ok) throw new Error(`${res.status}\n${res.statusText}`);
      return res.json();
    });
    if (Data === null) Data = [];

    this.setState({ tapps: this.state.tapps.concat(Data), start: this.state.start + Data.length, reachedEnd: Data.length < this.state.take });
  }

  render() {
    console.log(this.state.reachedEnd);
    return (
      <div className="accordion accordion--open" data-group="site" style={{ overflow: 'hidden', marginTop: '30px' }} >
        <SearchHead callback={this.loadNewData} />
        <ResultList tapps={this.state.tapps} callback={this.loadMoreData} reachedEnd={this.state.reachedEnd} />
      </div>
    );
  }
}

export default SearchContainer;
