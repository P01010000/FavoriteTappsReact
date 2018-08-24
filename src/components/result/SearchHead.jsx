import React from 'react';
import PropTypes from 'prop-types';
import { OVERVIEW } from '../../constants/text';

class SearchHead extends React.Component {
  static propTypes = {
    callback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = { };
  }


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
          <label><i className="fa fa-search" /></label>
        </div>
      </div>
    );
  }
}

export default SearchHead;
