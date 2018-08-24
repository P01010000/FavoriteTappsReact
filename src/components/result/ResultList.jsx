import React from 'react';
import PropTypes from 'prop-types';
import ResultListItem from './ResultListItem';
import './ResultList.scss';

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
        const listItems = this.props.tapps.map(t => <ResultListItem {...t} />);
        return (
            <div className="accordion__body color--1">
                {listItems}
                {this.props.reachedEnd ? <div className="grid__item" style={{ textAlign: 'right' }} onClick={this.props.callback} onKeyPress={() => undefined} >Mehr anzeigen</div> : undefined}
            </div>
        );
    }
}

export default ResultList;
