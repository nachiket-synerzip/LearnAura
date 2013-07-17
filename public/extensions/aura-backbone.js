define(function() {
  return function(app) {
    var _ = app.core.util._;
    var Backbone;
    return {
      require: {
        paths: { 
          backbone: 'bower_components/backbone/backbone',
          underscore: 'bower_components/underscore/underscore'
        },
        shim: {
          backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] }
        }
      },
      initialize: function(app) {
        Backbone = require('backbone');
        app.core.mvc    = Backbone;
        app.sandbox.mvc = Backbone;
        app.components.addType('Backbone', Backbone.View.prototype);
      }
    }
  }
});