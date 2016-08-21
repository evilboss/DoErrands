import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ErrandList from '../../components/errand_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const errandList = Collections.Errands.find().fetch();
  console.log(errandList);
  onData(null, {errandList});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ErrandList);
