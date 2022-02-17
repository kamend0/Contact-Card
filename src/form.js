import React, { Component } from 'react'
import './styles.css'

class Form extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Number of Contacts to Show:</label>
                    <br />
                    <input type='text' name='numContacts' />
                    <input type='submit' value='Submit' />
                </div>
            </form>
        )
    }
}

export default Form