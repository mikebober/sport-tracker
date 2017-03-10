import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Gtennis.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Gtennis.helpers({
    players() {
        return Players.find({
            'sport':'girls tennis'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls tennis'
        });
    }
})
