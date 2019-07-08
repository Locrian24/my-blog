import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

import auth0Client from '../../Auth';
import './Nav.scss';

const Nav = props => {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    const titleGap = {
        marginLeft: '15px'
    };

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='text-left'>
                    <Link to='/'>
                        <h1>
                            <FontAwesomeIcon icon={faTree} />
                            <span style={titleGap}>LOCRIAN24</span>
                        </h1>
                    </Link>
                </div>
                <div className='text-right'>
                    {auth0Client.isAuthenticated() && (
                        <React.Fragment>
                            <label className='mr-2'>Authenticated</label>
                            <button
                                className='btn btn-dark'
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Sign Out
                            </button>
                        </React.Fragment>
                    )}
                    {!auth0Client.isAuthenticated() && (
                        <Link to='/signin/'>Sign In</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default withRouter(Nav);
