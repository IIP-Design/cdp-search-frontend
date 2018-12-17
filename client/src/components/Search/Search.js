import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { func, shape, string, object } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Form } from 'semantic-ui-react';
import './Search.css';

class Search extends Component {
  componentDidMount() {
    // Clear session if on home page
    if ( this.props.location.pathname === '/' ) {
      // TODO: cache default query (set up general caching strategy)
      this.props.clearFilters();
      this.props.createRequest();
    }
  }

  handleQueryOnChange = ( e ) => {
    this.props.updateSearchQuery( e.target.value );
  };

  handleSubmit = ( e ) => {
    e.preventDefault();

    this.props.createRequest();
    this.props.history.push( '/results' );
  };

  render() {
    return (
      <section className="search_bar">
        <Form onSubmit={ this.handleSubmit }>
          <Form.Group>
            <Form.Input
              placeholder="Type in keywords to search our content"
              className="search_input"
              onChange={ this.handleQueryOnChange }
              value={ this.props.search.query ? this.props.search.query : '' }
            />
            <Form.Button icon="search" type="submit" />
          </Form.Group>
        </Form>
      </section>
    );
  }
}

const mapStateToProps = state => ( {
  search: state.search
} );

Search.propTypes = {
  updateSearchQuery: func,
  createRequest: func,
  clearFilters: func,
  history: object,
  location: object,
  search: shape( {
    query: string
  } )
};

// wrap component in withRouter to get access to history
export default withRouter( connect( mapStateToProps, actions )( Search ) );