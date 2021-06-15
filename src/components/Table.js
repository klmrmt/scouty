import React, { Component, useEffect, setState } from 'react';

class Table extends Component {

    constructor(props){
        super(props);
        this.state = {count: 0}
    }
    addCount = () => {
      this.setState({
        count: this.state.count + 1 
      });
    }
    subCount = () => {
      this.setState({
        count: this.state.count - 1 
      });
    }
  render() {
    let button;
    console.log(this.state.count)
    if (this.state.count === 0) {
      button =             
        <div>
          <button onClick={this.addCount}>Next</button>
        </div>;
    } 
    else if (this.state.count == (this.props.count / 2) - 1) {
      button =             

      <div>
        <button onClick={this.subCount}>Prev</button>
      </div>;}
       else {
        button =             

          <div>
            <button onClick={this.subCount}>Prev</button>
            <button onClick={this.addCount}>Next</button>

        </div>
        }
  return (
    <div>
        <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Position</th>
                        <th>Date Posted</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.jobs.slice(this.state.count * 2, (this.state.count * 2) + 2).map(data => {
                    
                    return (
                        <tr>     
                        <td>{data.company}</td>
                        <td>{data.location}</td>
                        <td>{data.position}</td>
                        <td>{data.datePosted}</td>
                        </tr>
                        
                    );
                  
                    })}
            
                  
                </tbody>
                
            </table>
            {button}
    </div>
            
    );
  }
}

export default Table;