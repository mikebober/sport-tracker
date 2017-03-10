import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Baseball.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Baseball.helpers({
    players() {
        return Players.find({
            'sport':'baseball'
        });
    },
    teams() {
        return Teams.find({
            'sport':'baseball'
        });
    }
})
