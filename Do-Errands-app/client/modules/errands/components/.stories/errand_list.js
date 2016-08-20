import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ErrandList from '../errand_list.jsx';

storiesOf('errands.ErrandList', module)
  .add('default view', () => {
    return (
      <ErrandList />
    );
  })
