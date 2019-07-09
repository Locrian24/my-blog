import React from 'react';
import { Link } from 'react-router-dom';
import PrivateLink from '../../components/PrivateLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faEdit } from '@fortawesome/free-solid-svg-icons';

import AJAX from '../../utils/ajax';

import './Entry.scss';

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
            this.state.entry === null && <div />,
            this.state.entry && (
                <div className='container entry-container'>
                    <div className='entry-content'>
                        <div className='icon'>
                            <Link to='/entries'>
                                <FontAwesomeIcon icon={faChevronUp} size='3x' />
                            </Link>
                        </div>
                        <div className='title'>{this.state.entry.title}</div>
                        <div className='body'>{this.state.entry.body}</div>
                        <div className='icon edit'>
                            <PrivateLink
                                to={`/edits/${entryId}`}
                                body={
                                    <FontAwesomeIcon icon={faEdit} size='1x' />
                                }
                            />
                        </div>
                    </div>
                </div>
            )
        );
    }
}

export default Entry;
