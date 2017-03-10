import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Bswimming.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Bswimming.helpers({
    players() {
        return Players.find({
            'sport':'boys swimming'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boys swimming'
        });
    }
})
