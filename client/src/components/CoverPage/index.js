import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import Home from './HomePage';
import ListSavedJobs from './ListSavedJobs'
export default class index extends Component {

  state = {
    receiver: 'Receiver ',
    receiverCompany: 'Company',
    position: 'Your Position',
    sender: 'Sender',
    address: 'Sender Address',
    phone: '+44 7777 777 777',
    email: 'test@test.com',
    message: 'Message'
  }

	submitButton = () => (
			<div>
				<ReactToPrint
					trigger={() => <a style={{fontFamily:'Alagard'}} href="#">Print<i class="material-icons right">print</i></a>}
					content={() => this.componentRef}
				/>
				<div className="home-hidden">
					<Home ref={el => (this.componentRef = el)} 
							receiver={this.state.receiver}
							receiverCompany={this.state.receiverCompany}
							position={this.state.position}
							sender={this.state.sender}
							address={this.state.address}
							phone={this.state.phone}
							email={this.state.email}
							message={this.state.message}
							/>
				</div>
			</div>
  )
  
    
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
      <div className="logContainer">
        <form>
          <h2>Cover Letter Generator</h2>
          <p>Receiver</p>
          <input 
            placeholder="Receiver's Name"
            onBlur={(element) => this.setState({
              receiver: element.target.value
            })}
          />
          <p>Company</p>
          <input
            placeholder="Receiver's Company"
            onBlur={(element) => this.setState({
              receiverCompany: element.target.value
            })}
          />
          <p>Position</p>
          <input
            placeholder="Position applied for"
            onBlur={(element) => this.setState({
              position: element.target.value
            })}
          />
          <p>Sender</p>
          <input
            placeholder="Sender's Name"
            onBlur={(element) => this.setState({
              sender: element.target.value
            })}
          />
          <p>Address</p>
          <input
            placeholder="Sender's Address"
            onBlur={(element) => this.setState({
              address: element.target.value
            })}
          />
          <p>Phone</p>
          <input
            placeholder="Sender's Phone"
            onBlur={(element) => this.setState({
              phone: element.target.value
            })}
          />
					<p>Email</p>
					<input
						type="email"
						placeholder="Sender's Email"
						onBlur={(element) => this.setState({
							email: element.target.value
						})}
					/>
          <p>Message</p>
          <textarea
            onBlur={(element) => this.setState({
              message: element.target.value
            })}
          />
          <button className='print waves-effect waves-light btn'>
          {this.submitButton()}
          
					</button>
        </form>
      </div>

      <div classname ="listSavedJobs">
      <ListSavedJobs
      >
      
      </ListSavedJobs>
        </div>
      </React.Fragment>
    );
  }
}

