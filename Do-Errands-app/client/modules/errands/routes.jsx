import React from 'react';
import {mount} from 'react-mounter';
import Header from '../core/components/header';
import {ErrandList, CreateErrand} from './containers/errands/index';
import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/errand/create', {
    name: 'errand.create',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CreateErrand />)
      });
    }
  });

  FlowRouter.route('/errand/list', {
    name: 'errand.list',
    action() {
      mount(MainLayoutCtx, {
        header: () => (<Header />),
        content: () => (<ErrandList />)
      });
    }
  });
}
