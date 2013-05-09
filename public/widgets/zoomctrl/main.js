define(["text!./templates/defaultTemplate.html"], function(tmpl){
	return {
		type: 'Backbone',
		template: _.template(tmpl),
		initialize: function() {
			console.log("init zoomctrl");
			this.render();
		},
		render: function() {	
			this.$el.html(this.template);
		},
		events: {
			"click #zoomin": function() {
				console.log("Clicked zoom in");
				this.sandbox.emit("zoomctrl.zoomin");
			},
			"click #zoomout": function() {
				console.log("Clicked zoom out");
				this.sandbox.emit("zoomctrl.zoomout");
			}
		}
	}
});