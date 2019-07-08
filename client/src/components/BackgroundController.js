import React from 'react';
import { withRouter } from 'react-router-dom';

const BackgroundController = props => {
    let backgroundClasses = ['bg'];
    const { pathname } = props.location;

    pathname !== '/' && pathname !== '/entries'
        ? backgroundClasses.push('show')
        : (backgroundClasses = backgroundClasses.filter(className => {
              return className !== 'show';
          }));

    return <div className={backgroundClasses.join(' ')}>{props.children}</div>;
};

export default withRouter(BackgroundController);
