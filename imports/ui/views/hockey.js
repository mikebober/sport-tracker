import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Hockey.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Hockey.helpers({
    players() {
        return Players.find({
            'sportH':'hockey'
        });
    },
    teams() {
        return Teams.find({
            'sport':'hockey'
        });
    }
})
