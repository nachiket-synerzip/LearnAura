define({
	require: {
		paths: {
			openlayers: 'bower_components/openlayers/OpenLayers'
		},
		shim: {
			openlayers: {
				exports: 'OpenLayers'
			}
		}
	},
	initialize: function(app) {
		OpenLayers = require('openlayers');
		app.sandbox.OpenLayers = OpenLayers;	
	}
});
