require('./About.css');

import React from 'react';

class About extends React.Component
{
    render()
    {
        return (
          <div id="view-about">
            <h1>About!</h1>
          </div>
        )
    }
}

About.defaultProps = {};

export default About;
