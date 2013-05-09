define(["text!./templates/headerTemplate.html"], function(tmpl){
	return {
		template: _.template(tmpl),
		initialize: function() {
			console.log("init header");
			this.render();
		},
		render: function() {	
			this.$el.html(this.template);
		}
	}
});