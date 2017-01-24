import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


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

Template.Bsoccer.onCreated(function (){
  this.autorun(() => {
    this.subscribe('teams.public');
  })
});

Template.Bsoccer.helpers({
    teams() {
        return Teams.find({
            sport:"soccer"
        });
    }
})
