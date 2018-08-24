import React from 'react';
import { OVERVIEW } from '../../constants/text';

class SearchHead extends React.Component {
  render() {
    return (
      <div className="accordion__head search">
        <div className="accordion--trigger accordion__head--search--wrapper">
          <div className="accordion--trigger accordion__head--search">
              {OVERVIEW}
          </div>
        </div>
        <div className="Suche Suche--accordion chayns__border-color--50">
          <input type="text" placeholder="Suche" id="searchFilter" onKeyUp={this.props.callback} defaultValue="" />
          <label><i className="fa fa-search"></i></label>
        </div>
      </div>
    );
  }
}

export default SearchHead;
