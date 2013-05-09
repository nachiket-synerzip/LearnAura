define(['components/aura/aura'], function(Aura) {
	var app = new Aura();
    app.use('extensions/aura-backbone');
	app.start({
  		widgets: 'body'
	}).then(function() {
        console.warn('Aura started...');
    });
});
