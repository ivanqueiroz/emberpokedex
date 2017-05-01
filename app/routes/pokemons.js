import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        if (params.url !== 'listar') {
            Ember.Logger.log(params);
            return Ember.$.getJSON(params);
        } else {
            return Ember.$.getJSON("http://pokeapi.co/api/v2/pokemon/");
        }
    }
});
