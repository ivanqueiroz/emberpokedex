import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return Ember.$.getJSON("https://pokeapi.co/api/v2/pokemon/" + params.name);
    }

});
