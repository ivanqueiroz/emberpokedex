import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

    model(params) {
        if (params.url) {
            var arr = params.url.split("\/");
            var id = arr[6];
        }
        return RSVP.hash({
            pokemon: Ember.$.getJSON("https://pokeapi.co/api/v2/pokemon/" + id),
            desc: Ember.$.getJSON("https://pokeapi.co/api/v2/characteristic/" + id)
        });

    }

});
