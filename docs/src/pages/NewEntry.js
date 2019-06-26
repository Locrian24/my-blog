import React from 'react'

class NewEntry extends React.Component {
    state = {
        title: '',
        summary: '',
        body: '',
        date: ''
    }

    updateTitle(value) {
        this.setState({
            title: value
        })
    }

    updateSummary(value) {
        this.setState({
            summary: value
        })
    }

    updateBody(value) {
        this.setState({
            body: value
        })
    }

    componentDidMount() {
        const dateObj = new Date();
        let dateString = `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
        this.setState({
            date: dateString
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-monospace">{this.state.date}</h2>
            </div>
        )
    }
}

export default NewEntry;