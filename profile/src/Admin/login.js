import React from 'react';

class Login extends React.Component {
  render(){
  return (
    <div className="App">

        <form>
          <h1>Hello Admin </h1>
          <p>Please Log In:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />

          <input
            type='text'
            onChange={this.myChangeHandler}
          />

          <input
  type='submit'
/>


        </form>

    </div>
  );
}
}
export default Login;
