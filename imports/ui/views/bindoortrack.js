import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Bindoortrack.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Bindoortrack.helpers({
    players() {
        return Players.find({
            'sport':'boys indoor track'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boys indoor track'
        });
    }
})
