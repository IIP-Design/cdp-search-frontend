import axios from 'axios';
import bodybuilder from 'bodybuilder';

const SEARCH = `${process.env.REACT_APP_PUBLIC_API}/v1/search`;

export const queryRequest = body => axios.post( SEARCH, body ).then( response => response.data );

export const languageAggRequest = () =>
  axios
    .post( SEARCH, {
      body: bodybuilder()
        .size( 0 )
        .agg( 'terms', 'unit.language.locale.keyword', {}, 'locale' )
        .agg( 'terms', 'unit.language.display_name.keyword', {}, 'display' )
        .build()
    } )
    .then( response => response.data );

// export const languageAggRequest = () =>
//   axios
//     .post( SEARCH, {
//       body: bodybuilder()
//         .size( 0 )
//         // .agg( 'terms', 'language.locale.keyword', {}, 'locale', a =>
//         //   a.aggregation( 'terms', 'language.display_name.keyword', {}, 'display' ) )
//         .agg( 'terms', 'unit.language.locale.keyword', {}, 'locale_unit', a =>
//           a.aggregation( 'terms', 'unit.language.display_name.keyword', {}, 'display_unit' ) )
//         .build()
//     } )
//     .then( response => response.data );

export const categoryAggRequest = () =>
  axios
    .post( SEARCH, {
      body: bodybuilder()
        .size( 0 )
        .agg( 'terms', 'unit.categories.name.keyword', {}, 'category' )
        .agg( 'terms', 'unit.categories.id.keyword', {}, 'id' )
        .build()
    } )
    .then( response => response.data );

export const categoryBaseRequest = () =>
  axios
    .post( SEARCH, {
      body: bodybuilder()
        .size( 100 )
        .query( 'query_string', 'query', '_type: term AND primary: true' )
        .build()
    } )
    .then( response => response.data );

export const postTypeAggRequest = () =>
  axios
    .post( SEARCH, {
      body: bodybuilder()
        .size( 0 )
        .agg( 'terms', 'type.keyword', {}, 'postType' )
        .build()
    } )
    .then( response => response.data );

export const siteAggRequest = () =>
  axios
    .post( SEARCH, {
      body: bodybuilder()
        .size( 0 )
        .agg( 'terms', 'site.keyword', {}, 'site' )
        .build()
    } )
    .then( response => response.data );
