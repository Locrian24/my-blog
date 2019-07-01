import React from 'react';
import { Link } from 'react-router-dom';
import PrivateLink from '../../components/PrivateLink';

import AJAX from '../../utils/ajax';

class Entry extends React.Component {
    state = {
        entry: null
    };

    componentDidMount() {
        this.loadEntry();
    }

    loadEntry = () => {
        const entryId = this.props.match.params.entryId;
        AJAX.getEntryById(entryId)
            .then(res => this.setState({ entry: res.data }))
            .catch(err => console.log('Failed to Load Entry: ' + err));
    };

    render() {
        const entryId = this.props.match.params.entryId;

        return (
            <div className='container'>
                {this.state.entry === null && <p>Loading Entry...</p>}

                {this.state.entry && (
                    <div>
                        <div className='card m-5'>
                            <div className='card-header'>
                                {this.state.entry.title}
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>
                                    {this.state.entry.body}
                                </p>
                                <small>{this.state.entry.userId}</small>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col text-left'>
                                <Link to={`/entries/`}>
                                    <p>Go back to entries...</p>
                                </Link>
                            </div>
                            <div className='col text-right'>
                                <PrivateLink
                                    to={`/edits/${entryId}`}
                                    body={<p>Edit this post...</p>}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Entry;
