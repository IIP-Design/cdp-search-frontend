import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { numberWithCommas } from '../../utils/helpers';
import { Header } from 'semantic-ui-react';
import './SearchTerm.css';

const SearchTerm = ( props ) => {
  const { currentQuery, total } = props.search;

  if ( props.search.response.took && props.search.response.hits.hits.length ) {
    return (
      <section className="searchTerm">
        <Header as="h1" className="searchTermQuery">
          { `"${currentQuery}"` }
          <Header.Subheader className="searchTermTotal">{ numberWithCommas( total ) } items</Header.Subheader>
        </Header>
      </section>
    );
  }

  return <div />;
};

const mapStateToProps = state => ( {
  search: state.search
} );

SearchTerm.propTypes = {
  search: object
};

export default connect( mapStateToProps )( SearchTerm );
