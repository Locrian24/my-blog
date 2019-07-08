import React from 'react';
import { withRouter } from 'react-router-dom';
import Ajax from '../../utils/ajax';
import auth0Client from '../../Auth';

class NewEntry extends React.Component {
    state = {
        title: '',
        summary: '',
        body: '',
        date: null
    };

    // Input field must have name={corresponding state key}
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        if (this.state.title && this.state.summary && this.state.body) {
            Ajax.createNew(
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

    componentDidMount() {
        const dateObj = new Date();
        let dd = dateObj.getDate();
        let mm = dateObj.getMonth() + 1;
        let yyyy = dateObj.getFullYear();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        let dateString = dd + '/' + mm + '/' + yyyy;
        this.setState({
            date: dateString
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='card border-primary'>
                    <div className='card-header'>New Blog Entry</div>
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
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(NewEntry);
