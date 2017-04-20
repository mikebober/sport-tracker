import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Tupdate.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.private', FlowRouter.getParam('id'));
  })
});

Template.Tupdate.onRendered(function (){
    const player=Players.findOne(FlowRouter.getParam('id'))
    document.getElementById('firstNameTrack').value = player.firstNameTrack;
    document.getElementById('lastNameTrack').value = player.lastNameTrack;
    document.getElementById('five').value = player.five;
    document.getElementById('one').value = player.one;
    document.getElementById('two').value = player.two;
    document.getElementById('three').value = player.three;
    document.getElementById('four').value = player.four;
    document.getElementById('eight').value = player.eight;
    document.getElementById('oneMile').value = player.oneMile;
    document.getElementById('twoMile').value = player.twoMile;
    document.getElementById('longJump').value = player.longJump;
    document.getElementById('highJump').value = player.highJump;
    document.getElementById('trippleJump').value = player.trippleJump;
    document.getElementById('pole').value = player.pole;
});

Template.Tupdate.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameTrack: tmpl.find('#firstNameTrack').value,
        lastNameTrack: tmpl.find('#lastNameTrack').value,
        five: tmpl.find('#five').value,
        one: tmpl.find('#one').value,
        two: tmpl.find('#two').value,
        three: tmpl.find('#three').value,
        four: tmpl.find('#four').value,
        eight: tmpl.find('#eight').value,
        oneMile: tmpl.find('#oneMile').value,
        twoMile: tmpl.find('#twoMile').value,
        longJump: tmpl.find('#longJump').value,
        highJump: tmpl.find('#highJump').value,
        trippleJump: tmpl.find('#trippleJump').value,
        pole: tmpl.find('#pole').value
        };

        Players.update(FlowRouter.getParam('id'), {$set: {
            firstNameTrack: tmpl.find('#firstNameTrack').value,
            lastNameTrack: tmpl.find('#lastNameTrack').value,
            five: tmpl.find('#five').value,
            one: tmpl.find('#one').value,
            two: tmpl.find('#two').value,
            three: tmpl.find('#three').value,
            four: tmpl.find('#four').value,
            eight: tmpl.find('#eight').value,
            oneMile: tmpl.find('#oneMile').value,
            twoMile: tmpl.find('#twoMile').value,
            longJump: tmpl.find('#longJump').value,
            highJump: tmpl.find('#highJump').value,
            trippleJump: tmpl.find('#trippleJump').value,
            pole: tmpl.find('#pole').value
        }});

        tmpl.find('#firstNameTrack').value="";
        tmpl.find('#lastNameTrack').value="";
        tmpl.find('#five').value="";
        tmpl.find('#one').value="";
        tmpl.find('#two').value="";
        tmpl.find('#three').value="";
        tmpl.find('#four').value="";
        tmpl.find('#eight').value="";
        tmpl.find('#oneMile').value="";
        tmpl.find('#twoMile').value="";
        tmpl.find('#longJump').value="";
        tmpl.find('#highJump').value="";
        tmpl.find('#trippleJump').value="";
        tmpl.find('#pole').value="";

        Players.insert(player);
      }

    });
