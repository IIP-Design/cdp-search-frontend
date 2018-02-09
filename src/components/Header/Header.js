import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class HeaderItem extends Component {
  render() {
    return (
      <section>      
        <Header as='h1' textAlign='center' className='title'>
          Content Commons
          <Header.Subheader className='subtitle'>Welcome to the Content Commons. Here you can discover, find, and reuse public diplomacy content from U.S. Department of State resources.</Header.Subheader>
        </Header>        

      </section>
    );
  }
}

export default HeaderItem;