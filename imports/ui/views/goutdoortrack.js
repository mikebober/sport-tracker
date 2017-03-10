import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Goutdoortrack.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Goutdoortrack.helpers({
    players() {
        return Players.find({
            'sport':'girls outdoor track'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls outdoor track'
        });
    }
})
