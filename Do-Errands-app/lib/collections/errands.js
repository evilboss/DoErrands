import {Mongo} from 'meteor/mongo';
const Markers = new Mongo.Collection('markers');

const Errands = new Mongo.Collection('errands');

export default Errands;
