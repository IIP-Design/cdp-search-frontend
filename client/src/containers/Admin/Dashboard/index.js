/**
 *
 * Dashboard
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import makeSelectDashboard from './selectors';
import { makeSelectUser } from 'containers/Auth/selectors';
import Page from 'components/Page';
import PaneProjects from 'containers/Admin/PaneProjects';
import { Grid, Tab, Popup } from 'semantic-ui-react';
import userIcon from 'assets/icons/icon_user_profile_dark.svg';
import './Dashboard.css';

const panes = [
  {
    menuItem:
    {
      key: '1',
      content: <Popup trigger={ <span>Overview</span> } content="Coming Soon!" inverted position="bottom left" />,
      disabled: true
    },
    render: () => <Tab.Pane />
  },
  { menuItem: { key: '2', name: 'Projects' }, render: () => <Tab.Pane ><PaneProjects /></Tab.Pane> },
  {
    menuItem:
    {
      key: '3',
      content: <Popup trigger={ <span>Team Projects</span> } content="Coming Soon!" inverted position="bottom left" />,
      disabled: true
    },
    render: () => <Tab.Pane />
  },
  {
    menuItem:
    {
      key: '4',
      content: <Popup trigger={ <span>Favorites</span> } content="Coming Soon!" inverted position="bottom left" />,
      disabled: true
    },
    render: () => <Tab.Pane />
  },
  {
    menuItem:
    {
      key: '5',
      content: <Popup trigger={ <span>Collections</span> } content="Coming Soon!" inverted position="bottom left" />,
      disabled: true
    },
    render: () => <Tab.Pane />
  }
];

/* eslint-disable react/prefer-stateless-function */
class Dashboard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Page title="Admin" description="Adminstrative area for content authoring">
        <div className="dashboard">
          <Grid stackable>
            <Grid.Column width={ 2 }>
              <img src={ userIcon } className="userIcon" alt="User Profile Icon" />
              { user && <span className="currentDashboard">{ user.name }</span> }
              <div className="filters">[ FILTERS ]</div>
            </Grid.Column>
            <Grid.Column width={ 14 }>
              <Tab
                menu={ { text: true, stackable: true } }
                panes={ panes }
                defaultActiveIndex={ 1 }
              />
            </Grid.Column>
          </Grid>
        </div>
      </Page>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.oneOfType( [PropTypes.object, PropTypes.func] )
};

const mapStateToProps = ( state, props ) => createStructuredSelector( {
  dashboard: makeSelectDashboard(),
  user: makeSelectUser()
} );

export default connect( mapStateToProps, actions )( Dashboard );