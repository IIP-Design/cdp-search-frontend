import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { Menu, Icon, Responsive } from 'semantic-ui-react';

class Nav extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      mobileNavVisible: false
    };
    this.navClick = this.handleNavClick.bind( this );
    this.keyUp = this.handleKeyUp.bind( this );
  }

  handleKeyUp( e ) {
    if ( e.key === 'Enter' ) {
      this.handleNavClick();
    }
  }

  handleNavClick() {
    if ( !this.state.mobileNavVisible ) {
      this.setState( { mobileNavVisible: true } );
    } else {
      this.setState( { mobileNavVisible: false } );
    }
  }

  render() {
    const menuItems = [
      {
        key: 1, name: 'about', to: 'about', label: 'About'
      },
      {
        key: 2, name: 'help', to: 'help', label: 'Help'
      }
    ];

    return (
      <nav>
        <Responsive
          as={ Icon }
          name="content"
          maxWidth={ 767 }
          onClick={ this.navClick }
          onKeyUp={ this.keyUp }
          tabIndex={ 0 }
        />
        <Responsive as={ Menu } compact secondary minWidth={ 768 }>
          { menuItems.map( item => (
            <Menu.Item key={ item.key } as={ Link } name={ item.name } to={ item.to }>{ item.label }</Menu.Item>
          ) ) }
        </Responsive>
        { this.state.mobileNavVisible &&
          <ul className="mobileMenu">
            { menuItems.map( item => (
              <li key={ item.key }>
                <Link name={ item.name } to={ item.to } onClick={ this.navClick } onKeyUp={ this.keyUp }>
                  { item.label }
                </Link>
              </li>
            ) ) }
          </ul>
        }
      </nav>
    );
  }
}

export default Nav;
