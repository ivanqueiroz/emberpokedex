import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.uncountable('pokemon');

export default DS.Model.extend({
    count: DS.attr(),
    next: DS.attr(),
    previous: DS.attr(),
    results: DS.hasMany('pokemon-info')
});
