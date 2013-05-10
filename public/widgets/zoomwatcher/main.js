define(["text!./templates/defaultTemplate.html"], function(tmpl){
	return {
		type: 'Backbone',
		template: _.template(tmpl),
		initialize: function() {
			console.log("init zoomwatcher");
			this.render();
			var self = this;
			this.sandbox.on("map.zoomchange", function (zoomLevel) {
				console.log("zoomLevel = " + zoomLevel);
				console.log("aa");
				console.log(self.$el.find("#zoomLevel").val());
				self.$el.find("#zoomLevel").val(zoomLevel);
				//self.$e1(input).value = zoomLevel;
			});
		},
		render: function() {	
			this.$el.html(this.template);
		}
	}
});