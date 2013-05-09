define(['components/aura/lib/aura'], function(Aura) {
	var app = new Aura();
	app.use('extensions/aura-openlayers');
	app.start({
  		widgets: 'body'
	}).then(function() {
        console.warn('Aura started...');
        console.log("opne layers");
    });
});
