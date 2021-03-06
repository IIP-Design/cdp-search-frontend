import { showLoading, hideLoading } from 'react-redux-loading-bar';
import range from 'lodash.range';
import {
  SEARCH_QUERY_UPDATE,
  SEARCH_AUTHOR_UPDATE,
  SEARCH_TAG_UPDATE,
  SEARCH_SORT_UPDATE,
  SEARCH_REQUEST_PENDING,
  SEARCH_REQUEST_FAILED,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_PAGE_PENDING,
  SEARCH_PAGE_FAILED,
  SEARCH_PAGE_SUCCESS,
  SEARCH_SORT_PENDING,
  SEARCH_SORT_FAILED,
  SEARCH_SORT_SUCCESS
} from './types';
import { queryRequest } from '../utils/api';
import { queryBuilder } from '../utils/helpers';

const calculatePageOffset = ( currentPage, pageSize ) => {
  if ( currentPage < 0 ) {
    return 0;
  }
  const pageOffset = currentPage * pageSize;
  return pageOffset - pageSize;
};

export const calculatePages = ( _total, _currentPage, pageSize ) => {
  const total = _total;
  const currentPage = _currentPage;
  const totalPages = Math.ceil( total / pageSize );

  let startPage;
  let endPage;
  if ( totalPages > 5 ) {
    // more than 5 total pages so calculate start and end pages
    if ( currentPage <= 3 ) {
      startPage = 1;
      endPage = 5;
    } else if ( currentPage + 2 >= totalPages ) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  } else {
    // less than 5 total pages, so show only the amount of pages
    startPage = 1;
    endPage = totalPages;
  }

  // calculate start and end item indices
  const startIndex = currentPage > 0 ? ( currentPage - 1 ) * pageSize : 0;
  const offset = startIndex + pageSize;
  const endIndex = Math.min( offset - 1, total - 1 );

  // create an array of pages
  const pages = range( startPage, endPage + 1 );

  return {
    total,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages
  };
};

export const updateSort = payload => ( {
  type: SEARCH_SORT_UPDATE,
  payload
} );

export const updateSearchQuery = payload => ( {
  type: SEARCH_QUERY_UPDATE,
  payload
} );

export const updateSearchAuthor = payload => ( {
  type: SEARCH_AUTHOR_UPDATE,
  payload
} );

export const updateSearchTag = payload => ( {
  type: SEARCH_TAG_UPDATE,
  payload
} );

export const createRequest = () => async ( dispatch, getState ) => {
  dispatch( showLoading() );
  dispatch( { type: SEARCH_REQUEST_PENDING } );

  let response;
  const currentState = getState();
  const { pageSize, query } = currentState.search;

  try {
    response = await queryRequest( {
      body: queryBuilder( currentState ),
      // from: calculatePageOffset( currentPage, pageSize ),
      size: pageSize
    } );
  } catch ( err ) {
    dispatch( hideLoading() );
    return dispatch( { type: SEARCH_REQUEST_FAILED } );
  }

  dispatch( hideLoading() );
  return dispatch( {
    type: SEARCH_REQUEST_SUCCESS,
    payload: {
      response,
      ...calculatePages( response.hits.total, 1, pageSize ), // currentPage
      pageSize,
      currentQuery: query
    }
  } );
};

export const targetRequest = page => async ( dispatch, getState ) => {
  dispatch( showLoading() );
  dispatch( { type: SEARCH_PAGE_PENDING } );

  const currentState = getState();
  const { pageSize } = currentState.search;

  let response;
  try {
    response = await queryRequest( {
      body: queryBuilder( getState() ),
      from: calculatePageOffset( page, pageSize ),
      size: pageSize
    } );
  } catch ( err ) {
    dispatch( hideLoading() );
    return dispatch( { type: SEARCH_PAGE_FAILED } );
  }

  dispatch( hideLoading() );
  window.scrollTo( 0, 0 );
  return dispatch( {
    type: SEARCH_PAGE_SUCCESS,
    payload: {
      response,
      current: page,
      ...calculatePages( response.hits.total, page, pageSize )
    }
  } );
};

export const sortRequest = sortType => async ( dispatch, getState ) => {
  dispatch( showLoading() );
  dispatch( {
    type: SEARCH_SORT_PENDING,
    payload: {
      sort: sortType,
      isFetching: true,
      error: false
    }
  } );

  let response;
  const currentState = getState();
  const { pageSize } = currentState.search;

  try {
    response = await queryRequest( {
      body: queryBuilder( currentState ),
      size: pageSize
    } );
  } catch ( err ) {
    dispatch( hideLoading() );
    return dispatch( { type: SEARCH_SORT_FAILED } );
  }

  dispatch( hideLoading() );
  return dispatch( {
    type: SEARCH_SORT_SUCCESS,
    payload: {
      response,
      ...calculatePages( response.hits.total, 1, pageSize )
    }
  } );
};

export const updateSizeRequest = newSize => async ( dispatch, getState ) => {
  dispatch( showLoading() );
  dispatch( { type: SEARCH_REQUEST_PENDING } );

  let response;
  const currentState = getState();

  try {
    response = await queryRequest( {
      size: newSize,
      // from: startIndex,
      body: queryBuilder( currentState )
    } );
  } catch ( err ) {
    dispatch( hideLoading() );
    return dispatch( { type: SEARCH_REQUEST_FAILED } );
  }

  dispatch( hideLoading() );

  return dispatch( {
    type: SEARCH_REQUEST_SUCCESS,
    payload: {
      response,
      ...calculatePages( response.hits.total, 1, newSize ) // currentPage
    }
  } );
};
