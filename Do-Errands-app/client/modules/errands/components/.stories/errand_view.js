import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ErrandView from '../errand_view.jsx';

storiesOf('errands.ErrandView', module)
  .add('default view', () => {
    return (
      <ErrandView />
    );
  })
