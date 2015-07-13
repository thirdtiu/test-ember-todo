export default Ember.Route.extend({
  model: function() {
    return $.ajax('http://localhost:4200/colors.json');
  }
});