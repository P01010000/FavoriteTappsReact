import React from 'react';

import { Mode } from 'chayns-components/lib';
import UserList from './user/UserList';
import PersonFinder from './personFinder/PersonFinderWrapper';
import SearchContainer from './result/SearchContainer';
import Formular from './formular/Formular';

export default class Content extends React.Component {
    render() {
        return (
            <div className="tapp__content content">
                <SearchContainer />
                <Formular />
            </div>
        );
    }
}
