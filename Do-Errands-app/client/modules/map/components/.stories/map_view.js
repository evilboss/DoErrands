import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MapView from '../map_view.jsx';

storiesOf('map.MapView', module)
  .add('default view', () => {
    return (
      <MapView />
    );
  })
