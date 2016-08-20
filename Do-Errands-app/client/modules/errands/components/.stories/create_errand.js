import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CreateErrand from '../create_errand.jsx';

storiesOf('errands.CreateErrand', module)
  .add('default view', () => {
    return (
      <CreateErrand />
    );
  })
