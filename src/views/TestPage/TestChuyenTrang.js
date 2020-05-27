import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router-dom'

export default class TestChuyenTrang extends Component {
    onClick = () => {
        console.log("button clicked!")
        this.props.history.push('/admin/notifications')
    }

    render() {
        return (
            <div>
                <Button variant="contained" onClick={this.onClick}>Default</Button>
            </div>
        )
    }
}
