import React from 'react';
import { shallow } from 'enzyme';

import PageLanding from './index';

describe( '<PageLanding />', () => {
  it( 'renders without crashing', () => {
    shallow( <PageLanding /> );
  } );
} );