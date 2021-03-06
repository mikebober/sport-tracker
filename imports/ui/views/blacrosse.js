import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Blacrosse.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
    this.subscribe('teams.public');
  })
});

Template.Blacrosse.helpers({
    players() {
        return Players.find({
            'sport':'boysLacrosse'
        });
    },
    teams() {
        return Teams.find({
            'sport':'boysLacrosse'
        });
    }
})
