import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        
            return Ember.$.getJSON("http://pokeapi.co/api/v2/pokemon/");
        
    }
    
});
