import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../../Auth';
import './Nav.scss';

const Nav = props => {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='text-left'>
                    <Link to='/'>
                        <h1 className='weight-bold'>Locrian24</h1>
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
