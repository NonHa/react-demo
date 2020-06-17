import React from 'react'
import classnames from 'classnames'
export default class FlashMessage extends React.Component {

    onClick = () => {
        this.props.deleteFlashMessage(this.props.message.id)
    }
    render() {
        const { type, text} = this.props.message
        return (
            <div className={ classnames('alert', {
                'alert-success' : type === "success",
                'alret-danger' : type === "danger"
            })}>
                <button onClick={ this.onClick } className="close">&times;</button>
                { text }
            </div>
        )
    }
}