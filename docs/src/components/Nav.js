import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../Auth';

const Nav = (props) => {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <div className="container m-3 pt-2">
            <div className="row">
                <div className="col text-left">
                    <Link to="/">
                        <h1 className="weight-bold">My Blog</h1>
                    </Link>
                </div>
                <div className="col text-right">
                { auth0Client.isAuthenticated() && (
                    <React.Fragment>
                        <Link to="/new-entry">
                            <h3>New Entry</h3>
                        </Link>
                        <label className="mr-2">Authenticated</label>
                        <button className="btn btn-dark" onClick={()=> {signOut()}}>Sign Out</button>
                    </React.Fragment>
                )}
                </div>
            </div>
        </div>
    );
}

export default withRouter(Nav);