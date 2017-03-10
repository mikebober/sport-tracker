import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Gindoortrack.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Gindoortrack.helpers({
    players() {
        return Players.find({
            'sport':'girls girls indoor track'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls indoor track'
        });
    }
})
