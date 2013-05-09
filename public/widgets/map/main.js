define({
	initialize: function() {
		console.log("initialize map yes");
		console.log(this.sandbox.OpenLayers);
		console.log("init 2");
		this.render();
	},
	render: function() {
		var OpenLayers = this.sandbox.OpenLayers;
		var map = new OpenLayers.Map("map");
		map.addLayer(this.getLayer());
		map.addControl(new OpenLayers.Control.LayerSwitcher({}));
		if(!map.getCenter()){
			map.zoomToMaxExtent();
		}
	},
	getLayer: function() {
		var OpenLayers = this.sandbox.OpenLayers;
		return new OpenLayers.Layer.WMS(
			'Base layer',
			'http://vmap0.tiles.osgeo.org/wms/vmap0',
			{
				layers: 'basic'
			},
			{
				isBaseLayer: true
			}
		)
	}
});
