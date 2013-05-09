define({
	require: {
		paths: {
			openlayers: 'components/openlayers/OpenLayers'
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
