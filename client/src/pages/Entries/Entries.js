import React from 'react';
import AJAX from '../../utils/ajax';
import EntryNav from '../../components/EntryNav/EntryNav';
import EntryPreview from '../../components/EntryPreview/EntryPreview';
import PrivateLink from '../../components/PrivateLink';

import './Entries.scss';

class Entries extends React.Component {
    state = {
        entries: null,
        visibleEntries: null,
        postsPerPage: 4,
        currentPage: 1
    };

    componentDidMount() {
        this.loadEntries();
    }

    loadEntries = () => {
        AJAX.getAllEntries()
            .then(res => {
                this.setState({ entries: res.data });
            })
            .catch(err => 'Error getting entries: ' + err);
    };

    shiftCurrentEntries = pageNumber => {
        this.setState({ currentPage: pageNumber });
    };

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

        if (entries === null) return <p>Loading Blog Entries...</p>;

        return (
            <div className='content container'>
                <PrivateLink to='/new/' body={<h3>New Entry</h3>} />
                {entries && currentEntries && (
                    <div className='entries-container'>
                        <EntryNav
                            currentPage={currentPage}
                            totalPosts={entries.length}
                            postsPerPage={postsPerPage}
                            shiftCurrentEntries={this.shiftCurrentEntries}
                            shiftDir='-1'
                        />

                        {currentEntries.map(entry => (
                            <div className='flex-block' key={entry._id}>
                                <EntryPreview
                                    id={entry._id}
                                    summary={entry.summary}
                                    date={entry.date}
                                />
                            </div>
                        ))}

                        <EntryNav
                            currentPage={currentPage}
                            totalPosts={entries.length}
                            postsPerPage={postsPerPage}
                            shiftCurrentEntries={this.shiftCurrentEntries}
                            shiftDir='1'
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Entries;
