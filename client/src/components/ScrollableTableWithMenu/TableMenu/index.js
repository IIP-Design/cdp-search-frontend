/**
 *
 * TableMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Checkbox, Icon } from 'semantic-ui-react';
import { titleCase } from '../../../utils/helpers';
import './TableMenu.css';

class TableMenu extends React.Component {
  state = {
    displayTableMenu: false,
  }
  
  componentDidMount(){
    document.addEventListener( 'click', this.toggleTableMenu, false );
  }

  componentWillUnmount(){
    document.removeEventListener( 'click', this.toggleTableMenu, false );
  }

  toggleTableMenu = e => {
    const isTableMenu = e.target.dataset.tablemenu;
    const isTableMenuItem = e.target.parentNode.dataset.tablemenuitem;

    if ( isTableMenu ) {
      return this.setState( prevState => ({ displayTableMenu: !prevState.displayTableMenu }) );
    }

    if ( isTableMenuItem ) {
      return this.setState( prevState => ({ displayTableMenu: true }) );
    }

    this.setState( prevState => ({ displayTableMenu: false }) );
  }

  handleTableScroll = e => {
    const items_table = document.querySelector('.items_table');
    const tableArrowDirection = e.target.dataset.tablearrow;    
    { 
      tableArrowDirection === 'right'
      ? items_table.scrollLeft += 200
      : items_table.scrollLeft -= 200
    }
  }

  render() {
    const { displayTableMenu } = this.state;
    const { columnMenu, tableMenuOnChange } = this.props;

    return (
      <Grid.Column floated='right' width={ 8 } className="items_menu_wrapper">
        <div className={ displayTableMenu ? 'items_menu active' : 'items_menu' }>
          <span data-tablemenu>See More <Icon data-tablemenu name="angle down"/></span>          
          <span data-tablearrow='left' onClick={ this.handleTableScroll }>
            <Icon name="angle left" data-tablearrow='left' />
          </span>
          <span data-tablearrow='right' onClick={ this.handleTableScroll }>
            <Icon name="angle right" data-tablearrow='right' />
          </span>
          <div className={ displayTableMenu ? 'items_menu_list display' : 'items_menu_list' }>
            { columnMenu.map( item => (
              <Checkbox 
                data-tablemenuitem
                data-propname={ item.name }
                data-proplabel={ item.label }
                key={ item.name }
                onChange={ tableMenuOnChange }
                label={ titleCase( item.label ) }
              />
            ) ) }
          </div>
        </div>
      </Grid.Column>
    );
  }
}

TableMenu.propTypes = {
  columnMenu: PropTypes.array,
  tableMenuOnChange: PropTypes.func
};

export default TableMenu;