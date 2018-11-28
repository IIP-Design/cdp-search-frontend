/**
 *
 * ProjectSupportFiles
 *
 */

import React, { Fragment } from 'react';
import { bool, func, object, string } from 'prop-types';
import './ProjectSupportFiles.css';

import IconPopup from 'components/Project/EditProject/IconPopup';
import SupportFileTypeList from 'components/Project/EditProject/SupportFileTypeList';

import { Checkbox, Grid } from 'semantic-ui-react';

const ProjectSupportFiles = ( props ) => {
  const {
    heading,
    supportFiles,
    hasSubmittedData,
    protectImages,
    handleChange,
    config
  } = props;

  const fileTypes = Object.keys( config );
  const columns = fileTypes.filter( n => supportFiles[n].length > 0 );

  const renderFileTypes = ( type ) => {
    const {
      headline,
      popupMsg,
      checkBoxLabel,
      checkBoxName,
      iconMsg,
      iconSize,
      iconType
    } = config[type];

    return (
      <Fragment key={ `file-type-${type}` }>
        <Grid.Column>
          <SupportFileTypeList
            headline={ headline }
            fileType={ type }
            popupMsg={ popupMsg }
            data={ supportFiles[type] }
            hasSubmittedData={ hasSubmittedData }
          />

          { type === 'thumbnail' &&
            <Fragment>
              <Checkbox
                label={ checkBoxLabel }
                name={ checkBoxName }
                type="checkbox"
                checked={ protectImages }
                onChange={ handleChange }
              />
              <IconPopup
                message={ iconMsg }
                size={ iconSize }
                iconType={ iconType }
              />
            </Fragment> }
        </Grid.Column>
      </Fragment>
    );
  };

  return (
    <div className="support-files">
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={ 16 }>
            <h2 className="heading uppercase">{ heading }</h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={ columns.length } divided>
          { fileTypes.map( renderFileTypes ) }
        </Grid.Row>
      </Grid>
    </div>
  );
};

ProjectSupportFiles.propTypes = {
  heading: string,
  supportFiles: object.isRequired,
  hasSubmittedData: bool,
  protectImages: bool,
  handleChange: func.isRequired,
  config: object.isRequired
};

export default ProjectSupportFiles;