define({
	initialize: function() {
		console.log("initialize map yes");
		console.log(this.sandbox.OpenLayers);
		console.log("init 2");
		this.render();
		var self = this;
		this.sandbox.on("zoomctrl.zoomin", function(){
			self.zoomIn();
		});
		this.sandbox.on("zoomctrl.zoomout", function(){
			self.zoomOut();
		});
	},
	map: {},
	render: function() {
		var OpenLayers = this.sandbox.OpenLayers;
		this.map = new OpenLayers.Map("map");
		this.map.addLayer(this.getLayer());
		//this.map.addControl(new OpenLayers.Control.LayerSwitcher({}));
		if(!this.map.getCenter()){
			this.map.zoomToMaxExtent();
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
	},
	zoomIn: function() {
		//zoomIn
		this.map.zoomIn();
	},
	zoomOut: function() {
		//zoomOut
		this.map.zoomOut();
	}
});
