import React from 'react';
import { withRouter } from 'react-router-dom';

import AJAX from '../utils/ajax';
import auth0Client from '../Auth';

class EditEntry extends React.Component {
    state = {
        title: '',
        summary: '',
        body: '',
        date: ''
    };

    componentDidMount() {
        this.loadEntry();
    }

    loadEntry = () => {
        const entryId = this.props.match.params.entryId;
        AJAX.getEntryById(entryId)
            .then(res => {
                const { title, summary, body } = res.data;
                this.setState({
                    title,
                    summary,
                    body
                });
            })
            .catch(err => console.log('Failed to Load Entry: ' + err));
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        const entryId = this.props.match.params.entryId;
        if (this.state.title && this.state.summary && this.state.body) {
            AJAX.updateEntry(
                entryId,
                {
                    title: this.state.title,
                    summary: this.state.summary,
                    body: this.state.body,
                    date: this.state.date
                },
                {
                    headers: {
                        Authorization: `Bearer ${auth0Client.getIdToken()}`
                    }
                }
            )
                .then(this.props.history.push('/'))
                .catch(err => console.log('Error saving entry: ' + err));
        }
    };

    deleteEntry = id => {
        AJAX.delete(id, {
            headers: {
                Authorization: `Bearer ${auth0Client.getIdToken()}`
            }
        })
            .then(res => {
                this.props.history.push('/');
                console.log('Successfully deleted');
            })
            .catch(err => console.log('Error deleting the entry' + err));
    };

    render() {
        const entryId = this.props.match.params.entryId;

        return (
            <div className='container'>
                <div className='card border-primary'>
                    <div className='card-header'>Edit This Blog Entry</div>
                    <div className='card-body text-left'>
                        <div className='form-group'>
                            <label htmlFor='inputTitle'>Title:</label>
                            <input
                                type='text'
                                value={this.state.title}
                                name='title'
                                className='form-control'
                                id='inputTitle'
                                onChange={this.handleInputChange}
                                placeholder='Title (required)'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputSummary'>Summary:</label>
                            <input
                                type='text'
                                value={this.state.summary}
                                name='summary'
                                className='form-control'
                                id='inputSummary'
                                onChange={this.handleInputChange}
                                placeholder='Summary (required)'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='inputBody'>Body:</label>
                            <textarea
                                type='text'
                                value={this.state.body}
                                name='body'
                                className='form-control'
                                id='inputBody'
                                onChange={this.handleInputChange}
                                placeholder='Body (required)'
                            />
                        </div>
                        <button
                            disabled={
                                !(
                                    this.state.title &&
                                    this.state.summary &&
                                    this.state.body
                                )
                            }
                            className='btn btn-primary'
                            onClick={this.handleOnSubmit}
                        >
                            Submit Change
                        </button>
                        <button
                            className='float-right btn btn-danger'
                            onClick={() => {
                                if (
                                    window.confirm(
                                        'Are you sure you wish to delete this post?'
                                    )
                                )
                                    this.deleteEntry(entryId);
                            }}
                        >
                            Delete Entry
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(EditEntry);
