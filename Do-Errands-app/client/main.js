import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import mapModule from './modules/map';
import errandsModule from './modules/errands';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(mapModule);
app.loadModule(errandsModule);
app.init();
