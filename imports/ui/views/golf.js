import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Golf.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Golf.helpers({
    players() {
        return Players.find({
            'sportGolf':'golf'
        });
    },
    teams() {
        return Teams.find({
            'sport':'golf'
        });
    }
})
