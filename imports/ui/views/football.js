import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';


Template.Football.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
  })
});

Template.Football.helpers({
    players() {
        return Players.find({
            sport:"football"
        });
    }
})
