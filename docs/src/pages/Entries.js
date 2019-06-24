import React from 'react';
import {Link} from 'react-router-dom';
import AJAX from '../utils/ajax';

class Entries extends React.Component {
    state = {
        entries: null
    }

    componentDidMount() {
        this.loadEntries();
    }

    loadEntries = () => {
        AJAX.getAllEntries()
            .then(res => this.setState({ entries: res.data }))
            .catch(err => console.log('Error Loading Blog Entries: ' + err));
    }

    render() {
        return (
            <div className="container m-3">
                <h1>My Blog</h1>
                { this.state.entries === null && <p>Loading Blog Entries...</p> }

                { this.state.entries && this.state.entries.map(entry => (
                        <div key={entry.id}>
                            <Link to={`/entries/${entry.id}`}>
                                <div className="card mt-3">
                                    <div className="card-header">{entry.title}</div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {entry.body}
                                        </p>    
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Entries;