import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Bbasketball.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Bbasketball.helpers({
    players() {
        return Players.find({
            'sport':'boys basketball'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boys basketball'
        });
    }
})
