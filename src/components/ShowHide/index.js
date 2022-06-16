// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}

  onShowFirstname = () => {
    this.setState(prevState => ({showFirstname: !prevState.showFirstname}))
  }

  onShowLastname = () => {
    this.setState(prevState => ({showLastname: !prevState.showLastname}))
  }

  render() {
    const {showFirstname, showLastname} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="firstname-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstname}
            >
              Show/Hide Firstname
            </button>
            {showFirstname && (
              <div className="name">
                <p className="firstname">Joe</p>
              </div>
            )}
          </div>
          <div className="firstname-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowLastname}
            >
              Show/Hide Lastname
            </button>
            {showLastname && (
              <div className="name">
                <p className="firstname">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
