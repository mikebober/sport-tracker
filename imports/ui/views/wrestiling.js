import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Wrestiling.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Wrestiling.helpers({
    players() {
        return Players.find({
            'sport':'wrestiling'
        });
    },
    teams() {
        return Teams.find({
            'sport':'wrestiling'
        });
    }
})
