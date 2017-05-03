import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('contact');

  this.route('pokemon', { path: 'pokemon/:url'});

  this.route('pokemons', { path: 'pokemons/:url'});
});

export default Router;
