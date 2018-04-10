import React, { Component } from 'react';
import { func, object } from 'prop-types';
import FilterSelectionItem from './FilterSelectionItem';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import './FilterSelections.css';

class FilterSelections extends Component {
  state = {
    selections: []
  };

  componentWillReceiveProps( nextProps ) {
    const nextLanguage = nextProps.language.currentLanguage;
    const language = {
      label: nextLanguage.display_name,
      value: nextLanguage.locale,
      filter: 'language',
      single: true
    };

    const nextTypes = nextProps.type.currentPostTypes.map( item => ( {
      label: item.display_name,
      value: item.type,
      filter: 'format',
      single: false
    } ) );

    const nextCategories = nextProps.category.currentCategories.map( item => ( {
      label: item.display_name,
      value: item.id,
      filter: 'category',
      single: false
    } ) );

    this.setState( {
      selections: [
        language, ...nextTypes, ...nextCategories
      ]
    } );
  }

  render() {
    const { selections } = this.state;

    return (
      <div className="filterMenu_selections">
        { selections.length > 0 &&
          selections.map( selection => (
            <FilterSelectionItem
              key={ selection.value }
              value={ selection.value }
              label={ selection.label }
              filter={ selection.filter }
              single={ selection.single }
              onClick={ this.props.onFilterChange }
            />
          ) ) }
        { selections.length > 0 && (
          <div
            className="ui label clear_filter"
            onClick={ this.props.onFilterClearAll }
            onKeyDown={ this.props.onFilterClearAll }
            role="button"
            tabIndex={ 0 }
          >
            CLEAR ALL
          </div>
        ) }
      </div>
    );
  }
}

FilterSelections.propTypes = {
  language: object,
  category: object,
  type: object,
  onFilterChange: func,
  onFilterClearAll: func
};

const mapStateToProps = state => ( {
  search: state.search,
  language: state.language,
  category: state.category,
  type: state.type
} );

export default connect( mapStateToProps, actions )( FilterSelections );
