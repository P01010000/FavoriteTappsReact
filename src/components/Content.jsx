import React from 'react';
import SearchContainer from './search/SearchContainer';
import Formular from './formular/Formular';

const Content = () => (
    <div className="tapp__content content">
        <SearchContainer defaultSearch="chayns" />
        <Formular />
    </div>
);

export default Content;
