import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CreateErrand from '../../components/create_errand.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let errands = Collections.Errands;
  console.log(errands);
  onData(null, {errands});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateErrand);
