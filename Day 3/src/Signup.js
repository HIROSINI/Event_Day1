import { Component } from "react"
import "./Signup.css"
import { Link } from "react-router-dom";

class Signup extends Component
{
  constructor(props){
    super(props);
    this.state={
        name:'',
        mail:'',
        password:'',
        mobile:'',
        };
}
handlenameChange = (event) => {
    this.setState({ name: event.target.value });
  };
handleEmailChange = (event) => {
    this.setState({ mail: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handlemobileChange = (event) => {
    this.setState({ mobile: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      mail: this.state.mail,
      password: this.state.password,  
      mobile: this.state.mobile,
    };
};
  render()
  {
  return (
    <>
    <div className="signback"></div>
    <div className="signall">
    <h1 className='ido1'>iDoEventZ</h1>
    <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?cs=srgb&dl=pexels-salah-alawadhi-382297.jpg&fm=jpg" alt="event" className="img1"></img>
    <div className="all1">
    <h2 className='wel1'>Welcome</h2>
    <h2 className='sign1'>Sign up</h2>

            <form action="index.html" autocomplete="off" class="iform1" onSubmit={this.handleSubmit}>
              
                <div class="input1">
                <label>Please Enter your Name:</label><br></br><br></br>
                  <input
                    type="text"
                    minlength="4"
                    class="input-field1"
                    autocomplete="off"
                    onChange={this.handlenameChange}
                    value={this.state.name}
                    required
                    />
                  
                </div><br></br>

              
                <div class="input1"> 
                <label>Please Enter your Email-ID:</label><br></br><br></br>
                  <input
                    type="email"
                    minlength="4"
                    class="input-field1"
                    autocomplete="off"
                    onChange={this.handleEmailChange}
                    value={this.state.mail}
                    required
                    />
                  </div><br></br>
      
                <div class="input1"> 
                <label>Please Enter your Password:</label><br></br><br></br>
                  <input
                    type="password"
                    minlength="4"
                    class="input-field1"
                    autocomplete="off"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                    required
                    />
                  
                  
                </div><br></br>
        
                    
                <div class="input1"> 
                <label>Please Enter your Contact Number:</label><br></br><br></br>
                  <input
                    type="tel"
                    minlength="12"
                    class="input-field1"
                    autocomplete="off"
                    onChange={this.handlemobileChange}
                    value={this.state.mobile}
                    required
                    />
                  
                </div>

                <div class="p2">
                <input type="checkbox" className="check"></input>
                <label>By signing up, I agree to the Terms of Services and Privacy Policy</label>
                </div>
                <Link to="/Home"><button class="signbutton">Sign Up</button></Link>
            
            
            </form>
            </div>
</div>

    
    </>
  )
  }
}

export default Signup