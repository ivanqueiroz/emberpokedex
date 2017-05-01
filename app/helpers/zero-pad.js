import Ember from 'ember';

export function zeroPad(params/*, hash*/) {
  var text = (params[0] || "").toString();
  var minLength = params[1];
  while (text.length < minLength) {
    text = '0' + text;
  }
  return text;
}

export default Ember.Helper.helper(zeroPad);
