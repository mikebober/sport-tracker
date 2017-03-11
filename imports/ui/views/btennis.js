import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Btennis.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Btennis.helpers({
    players() {
        return Players.find({
            'sportT':'boys tennis'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boys tennis'
        });
    }
})
