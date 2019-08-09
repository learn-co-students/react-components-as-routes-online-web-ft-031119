import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Signup" />
        </form>
      </div>
    )
  }
}

export default Signup
