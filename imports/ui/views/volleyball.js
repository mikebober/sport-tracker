import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Volleyball.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Volleyball.helpers({
    players() {
        return Players.find({
            'sportV':'volleyball'
        });
    },
    teams() {
        return Teams.find({
            'sport':'volleyball'
        });
    }
})
