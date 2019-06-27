import React, { Component } from 'react'
import {login} from '../repository';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitLogin = (e) => {
    e.preventDefault();
    login(this.state)
      .then(data => {
        console.log(data);
        window.location = '/';
      }).catch(e => {
        console.log(`error > ${e}`);
      })
  
  }

  render() {
    return (
     <div className="container">
     <hr/>
       <div className="col-sm-8 col-sm-offset-2">
         <div className="panel panel-primary">
           <div className="panel-heading">
             <h3>Log in </h3>
           </div>
           <div className="panel-body">
             <form onSubmit={this.submitLogin}>
               <div className="form-group">
                 <label>Name:</label>
                 <input type="text" className="form-control" name="name" onChange={this.handleInputChange}/>
               </div>
               <div className="form-group">
                 <label>Password:</label>
                 <input type="password" className="form-control" name="password" onChange={this.handleInputChange}/>
               </div>
               <button type="submit" className="btn btn-default">Submit</button>
             </form>
           </div>
         </div>
       </div>
     </div>
   );
 }
}
