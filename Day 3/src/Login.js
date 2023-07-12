import { Component } from "react"
import "./Login.css"
import {Link} from "react-router-dom";


class Login extends Component 
{
  constructor(props){
    super(props);
    this.state={
        mail:'',
        password:'',
        };
}
handleEmailChange = (event) => {
    this.setState({ mail: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      mail: this.state.mail,
      password: this.state.password,     
    };
};
  render()
  {
  return (
    <>
    <div className="back"></div>
    <div className="all">
    <h1 className='ido'>iDoEventz</h1>
    <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?cs=srgb&dl=pexels-salah-alawadhi-382297.jpg&fm=jpg" alt="event" className="img"></img>
    <h2 className='wel'>Welcome Back!</h2>
    <h2 className='log'>Login</h2>
    <div className="iform">
    <form onSubmit={this.handleSubmit}>
        <div class="input"> 
        <label>Please enter your Email-ID:</label><br></br><br></br>
            <input
            type="email"
            minlength="4"
            class="input-field"
            autocomplete="off"
            onChange={this.handleEmailChange}
            value={this.state.mail}
            required
            />
        </div><br></br>

        <div class="input"> 
        <label>Please enter your Password:</label><br></br><br></br>
            <input
            type="password"
            minlength="4"
            class="input-field"
            autocomplete="off"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            required
            />
        </div>
        <Link to="/Home"><button className="logbutton">Login</button></Link>
    </form>
    </div>
    <p className="p1">New Here? No Worries! Click here to Create an new Account.</p>
    <Link to="/Signup"><button className="button1">Sign up</button></Link>
    </div>
    </>
  )
  }
}

export default Login