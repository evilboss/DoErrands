import React from 'react';
import {mount} from 'react-mounter';
import {ErrandList, CreateErrand} from './containers/errands/index';
import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/create', {
    name: 'errand.create',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CreateErrand />)
      });
    }
  });
}
