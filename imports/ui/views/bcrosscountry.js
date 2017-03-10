import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Bcrosscountry.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Bcrosscountry.helpers({
    players() {
        return Players.find({
            'sport':'boys cross country'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boys cross country'
        });
    }
})
