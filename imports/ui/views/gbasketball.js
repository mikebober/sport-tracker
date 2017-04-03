import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Gbasketball.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Gbasketball.helpers({
    players() {
        return Players.find({
            'sportB':'girls basketball'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls basketball'
        });
    }
})
