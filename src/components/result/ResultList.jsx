import React from 'react';
import PropTypes from 'prop-types';
import ResultListItem from './ResultListItem';
import './ResultList.scss';
import { SHOW_MORE } from '../../constants/text';

class ResultList extends React.Component {
    static propTypes = {
        tapps: PropTypes.instanceOf(Array).isRequired,
        reachedEnd: PropTypes.bool,
        callback: PropTypes.func.isRequired
    }

    static defaultProps = {
        reachedEnd: true
    }

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const listItems = this.props.tapps.map(t => <ResultListItem key={this.props.siteId} {...t} />);
        return (
            <div className="accordion__body color--1">
                {listItems}
                {!this.props.reachedEnd ?
                    <div className="accordion__content">
                        <div style={{ textAlign: 'right' }} >
                            <a href="#" onClick={this.props.callback} onKeyPress={() => undefined} >{ SHOW_MORE }</a>
                        </div>
                    </div>
                    : undefined}
            </div>
        );
    }
}

export default ResultList;
