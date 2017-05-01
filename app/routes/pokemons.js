import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        if (params.url !== 'listar') {
            return Ember.$.getJSON(params);
        } else {
            return Ember.$.getJSON("http://pokeapi.co/api/v2/pokemon/");
        }
    }
});
