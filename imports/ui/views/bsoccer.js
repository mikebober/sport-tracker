import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';


Template.Bsoccer.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
  })
});

Template.Bsoccer.helpers({
    players() {
        return Players.find({
            sport:"soccer"
        });
    }
})
