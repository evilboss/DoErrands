import React from 'react';
const mapTemplate = BlazeToReact('mapTemplate');
const Hello = BlazeToReact('hello');
const Map = BlazeToReact('Map');
class MapView extends React.Component {
	
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		console.log('did mount');
	}
	
	render() {
		console.log(Map);
		return (
			<div>Will work
				 <Hello message="hi from react" count={5} />;
				<Map/>
			</div>
		);
	}
}
export default MapView;
