/**
 * Created by evilQueen on 8/20/16.
 */
// This section sets up some basic app metadata,
// the entire section is optional.
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.info({
	id: 'com.evilboss.Do-Errands',
	name: 'Do-Errands',
	description: 'Get errands done in one click',
	author: 'Jr Reyes',
	email: 'jr.evilboss@gmail.com'
});
// Set up resources such as icons and launch screens.

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('plugin.google.maps', {
	API_KEY_FOR_ANDROID: "Shhh it's a secret.",
	API_KEY_FOR_IOS: "AIzaSyDh77VcPuLk1dy9pVryxvyhbkAWdZL1PHI"
});

