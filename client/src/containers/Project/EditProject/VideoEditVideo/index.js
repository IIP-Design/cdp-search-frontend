/**
 *
 * VideoEditVideo
 *
 */
import React from 'react';
import moment from 'moment';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import makeSelectVideoEditVideo from './selectors';

import { Tab } from 'semantic-ui-react';
import VideoBasicDataForm from 'components/Project/EditProject/VideoBasicDataForm';
import VideoLinkDataForm from 'components/Project/EditProject/VideoLinkDataForm';

import './VideoEditVideo.css';

/* eslint-disable react/prefer-stateless-function */
class VideoEditVideo extends React.PureComponent {
  render() {
    const { data } = this.props;

    const panes = [
      { menuItem: 'Basic', render: () => <Tab.Pane attached={ false }><VideoBasicDataForm /></Tab.Pane> },
      { menuItem: 'Links', render: () => <Tab.Pane attached={ false }><VideoLinkDataForm /></Tab.Pane> }
    ];

    return (
      <div className="edit-video-modal">
        <figure className="modal_thumbnail overlay">
          <img className="overlay-image" src={ data.thumbnail } alt={ data.alt } />
          <div className="overlay-hover">
            <div className="overlay-text">Change Thumbnail</div>
          </div>
        </figure>
        <section className="modal_section modal_section--metaContent">
          <div className="modal_meta_wrapper">
            <div className="modal_meta">
              <span className="modal_meta_content modal_meta_content--filename">
                { data.fileName }
              </span>
              <br />
              <span className="modal_meta_content modal_meta_content--filesize">
                { 'Filesize: ' }
              </span>
              <span className="modal_meta_content modal_meta_content--dimensions">
                { 'Dimensions: ' }
              </span>
              <span className="modal_meta_content modal_meta_content--date">
                { `Uploaded: ${moment( data.uploaded ).format( 'MMMM DD, YYYY [at] h:mm A' )}` }
              </span>
              <span className="modal_meta_content modal_meta_content--duration">
                { 'Duration: ' }
              </span>
            </div>
          </div>
        </section>
        <section className="tabbed-container">
          <Tab menu={ { secondary: true, pointing: true } } panes={ panes } />
        </section>
        <section className="video-carousel">
          <h3 className="video-carousel-header">Videos in this Project</h3>
        </section>
      </div>
    );
  }
}

VideoEditVideo.propTypes = {
  data: object
};

const mapStateToProps = ( state, props ) => createStructuredSelector( {
  videoeditvideo: makeSelectVideoEditVideo()
} );

export default connect( mapStateToProps, actions )( VideoEditVideo );