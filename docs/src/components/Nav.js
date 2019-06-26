import React from 'react'
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    state = {
        isAuth: null
    }

    componentDidMount() {
        this.setState({ isAuth: true });
    }

    render() {
        const isAuth = this.state.isAuth;

        return (
            <div className="container m-3 pt-2">
                <div className="row">
                    <div className="col text-left">
                        <Link to="/">
                            <h1 className="weight-bold">My Blog</h1>
                        </Link>
                    </div>
                    <div className="col text-right">
                    { isAuth ? (
                        <Link to="/submit-new/">
                            <h3 className="pt-2">Submit new post</h3>
                        </Link>
                    ) : (
                        <h3>Not logged in</h3>
                    )}
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default Nav;