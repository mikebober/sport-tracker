import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Softball.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Softball.helpers({
    players() {
        return Players.find({
            'sportSo':'softball'
        });
    },
    teams() {
        return Teams.find({
            'sport':'softball'
        });
    }
})
