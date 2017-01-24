import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';

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

Template.Football.onCreated(function (){
  this.autorun(() => {
    this.subscribe('teams.public');
  })
});

Template.Football.helpers({
    teams() {
        return Teams.find({
            sport:"football"
        });
    }
})
