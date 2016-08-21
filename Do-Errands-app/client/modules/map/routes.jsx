import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import MapView from './components/map_view';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/map', {
    name: 'map',
    action() {
    	console.log('navitaged to map');
	    BlazeLayout.render('layout1', { top: "header", main: "map" });
	
    }
  });
}
