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
    sprinting() {
        return Players.find({
            'fieldO':'sprinting'
        });
    },
    distance() {
        return Players.find({
            'fieldO':'distance'
        });
    },
    field() {
        return Players.find({
            'fieldO':'field'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boysOutdoorTrack'
        });
    }
})
