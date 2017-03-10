import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Gswimming.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Gswimming.helpers({
    players() {
        return Players.find({
            'sport':'girls swimming'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls swimming'
        });
    }
})
