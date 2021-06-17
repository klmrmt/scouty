import React, { Component } from 'react';

class TableHeader extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id='jobs' className='tableHeader'>
        <span id='tableHeader-title'>
          {this.props.count} positions open
        </span>
        <br />
        <span id='tableHeader-text'>
          Last Updated {this.props.date}
        </span>
      </div>
    );
  }
}

export default TableHeader;