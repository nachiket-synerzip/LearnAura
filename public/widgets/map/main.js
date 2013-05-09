define({
	initialize: function() {
		console.log("initialize map yes");
		console.log(this.sandbox.OpenLayers);
		console.log("init 2");
		this.render();
	},
	render: function() {
		var OpenLayers = this.sandbox.OpenLayers;
		console.log(OpenLayers.Map);
		//this.$el.html('<h1>Hello New Aura</h1>');
		var map = new OpenLayers.Map("map");
		console.log(map);
		map.addLayer(this.getLayer());
		console.log(map);
		map.addControl(new OpenLayers.Control.LayerSwitcher({}));
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
