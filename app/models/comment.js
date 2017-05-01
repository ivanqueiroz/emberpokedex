import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  text: DS.attr('string'),
  idPokemon: DS.attr('string')
});
