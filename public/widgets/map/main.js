define({
  initialize: function() {
    // create a semi-random grid of features to be clustered
    this.render();
    var self=this;
    this.sandbox.on("zoomctrl.zoomin", function(){
      self.zoomIn();
    });
    this.sandbox.on("zoomctrl.zoomout", function(){
      self.zoomOut();
    });


  },
  map: {},
  render:function(){
    var dx = 3;
    var dy = 3;
    var px, py;
    var OpenLayers = this.sandbox.OpenLayers;
    features = [];
    for(var x=-45; x<=45; x+=dx) {
      for(var y=-22.5; y<=22.5; y+=dy) {
        px = x + (2 * dx * (Math.random() - 0.5));
        py = y + (2 * dy * (Math.random() - 0.5));
        features.push(new OpenLayers.Feature.Vector(
          new OpenLayers.Geometry.Point(px, py), {x: px, y: py}
        ));
      }
    }
    map = new OpenLayers.Map('map');
    map.events.register('zoomend', this, function() {
      console.log("zoom end");
      this.sandbox.emit("map.zoomchange", map.getZoom());
    });

    var style = new OpenLayers.Style({
      //Default Attributes
      pointRadius: "${radius}",
      fillColor: "orange",//Cluster Color
      fillOpacity: 0.8,//Cluster Opacity
      strokeColor: "pink",
      strokeWidth: "${width}",
      strokeOpacity: 0.8
    }, {
      context: {
        width: function(feature) {
          return (feature.cluster) ? 2 : 1;
        },
        radius: function(feature) {
          var pix = 2;
          if(feature.cluster) {
            pix = Math.min(feature.attributes.count, 7) + 2;
          }
          return pix;
        }
      }
    });

    strategy = new OpenLayers.Strategy.Cluster();

    clusters = new OpenLayers.Layer.Vector("Clusters", {
      strategies: [strategy],
      styleMap: new OpenLayers.StyleMap({
        "default": style,
        //Hover Attributes
        "select": {
          fillColor: "red",//Hover Color
          strokeColor: "green" //Kind Of border Color
        }
      })
    });

    var select = new OpenLayers.Control.SelectFeature(
      clusters, {hover: true}
    );
    map.addControl(select);
    select.activate();
    clusters.events.on({"featureselected": this.display});
    map.addLayers([this.getLayer(), clusters]);
    map.setCenter(new OpenLayers.LonLat(0, 0), 2);

    clusters.addFeatures(features);
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
  display:function(event){
    var f = event.feature;
    var $el = $("#output");
    $el.text("Cluster Details===>" +  "X-cordinate:  "+ f.geometry.x+ "  Y-cordinate:  "+ f.geometry.y);
  },
  zoomIn: function() {
    //zoomIn
    map.zoomIn();
  },
  zoomOut: function() {
    //zoomOut
    map.zoomOut();
  }
});
