import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Gcrosscountry.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Gcrosscountry.helpers({
    players() {
        return Players.find({
            'sport':'girls cross country'
        });
    },
    teams() {
        return Teams.find({
            'sport':'girls cross country'
        });
    }
})
