import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createComment: function (model) {
            this.sendAction('createComment', model);

            // Clear each input field
            this.set('newComment.comment.email', null);
            this.set('newComment.comment.name', null);
            this.set('newComment.comment.text', null);
            this.set('newComment.comment.idPokemon', null);
        }
    }
});
