import React from 'react';
import {Link} from 'react-router-dom';
import AJAX from '../utils/ajax';
import EntryNav from '../components/EntryNav';

class Entries extends React.Component {
    state = {
        entries: null,
        visibleEntries: null,
        postsPerPage: 4,
        currentPage: 1
    }

    componentDidMount() {
        this.loadEntries();
    }

    loadEntries = () => {
        AJAX.getAllEntries()
            .then(res => {
                this.setState({ entries: res.data});
            })
            .catch(err => 'Error getting entries: ' + err);

    };

    shiftCurrentEntries = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        // Redefine state variables for ease
        const entries = this.state.entries;
        const postsPerPage = this.state.postsPerPage;
        const currentPage = this.state.currentPage;

        let currentEntries = null;

        // Determine visible posts once entries is populated
        if (entries) {
            const lastIndex = currentPage * postsPerPage;
            const firstIndex = lastIndex - postsPerPage;
            currentEntries = entries.slice(firstIndex, lastIndex);
        }

        return (
            <div className="container m-3">

                { entries === null && <p>Loading Blog Entries...</p> }

                { entries && currentEntries && (
                    <div>
                    {
                    currentEntries.map(entry => (
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
                    <EntryNav 
                        currentPage={currentPage}
                        totalPosts={entries.length}
                        postsPerPage={postsPerPage}
                        shiftCurrentEntries={this.shiftCurrentEntries}
                    />
                    </div> 
                )}
            </div>
        )
    }
}


export default Entries;