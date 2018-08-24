import React from 'react';

import { HEADLINE, DESCRIPTION1, DESCRIPTION2 } from '../constants/text';

const Intro = () => (
    <div className="tapp__intro">
        <h1 className="headline">
            {HEADLINE}
        </h1>
        <p>
            {DESCRIPTION1}
            <a href="#addNewTapp">hier</a>
            {DESCRIPTION2}
        </p>
    </div>
);

export default Intro;
