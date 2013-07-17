require(['bower_components/aura/lib/aura'], function(Aura) {
	var app = new Aura({
    debug: true,
    logEvents: true,
    sources: {
      default: './widgets'
    }
  });
	app.use('extensions/aura-openlayers');
	app.use('extensions/aura-backbone');
	app.start({
  		widgets: 'body'
	}).then(function() {
      console.warn('Aura started...');
  });
});
