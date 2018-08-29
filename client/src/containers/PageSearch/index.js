/**
 *
 * SearchResults
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import makeSelectSearchResults from './selectors';

import './PageSearch.css';

/* eslint-disable react/prefer-stateless-function */
class PageSearch extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Search Page</title>
          <meta name="description" content="Displays a list of search results" />
        </Helmet>
        Search page results
      </div>
    );
  }
}

PageSearch.propTypes = {
};

const mapStateToProps = ( state, props ) => createStructuredSelector( {
  searchPage: makeSelectSearchResults()
} );

export default connect( mapStateToProps, actions )( PageSearch );