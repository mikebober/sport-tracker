import { Template } from 'meteor/templating';
import { Players } from '../../api/players/players.js';
import { Teams } from '../../api/teams/teams.js';


Template.Gsoccer.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
  })
});

Template.Gsoccer.helpers({
    players() {
        return Players.find({
            sport:"girls soccer"
        });
    }
})

Template.Gsoccer.onCreated(function (){
  this.autorun(() => {
    this.subscribe('teams.public');
  })
});

Template.Gsoccer.helpers({
    teams() {
        return Teams.find({
            sport:"girls soccer"
        });
    }
})
