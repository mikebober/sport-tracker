import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Boutdoortrack.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Boutdoortrack.helpers({
    players() {
        return Players.find({
            'sportTrack':'boys outdoor track'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boysOutdoorTrack'
        });
    }
})
