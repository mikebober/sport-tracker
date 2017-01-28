import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Fieldhockey.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public')
  })
});

Template.Fieldhockey.helpers({
    players() {
        return Players.find({
            sport:'fieldhockey'
        });
    },
    teams() {
        return Teams.find({
            sport:'fieldhockey'
        });
    }
})
