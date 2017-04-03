import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Glacrosse.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Glacrosse.helpers({
    players() {
        return Players.find({
            'sportL':'girls lacrosse'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls lacrosse'
        });
    }
})
