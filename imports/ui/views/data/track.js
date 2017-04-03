import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Track.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
        firstNameTrack: tmpl.find('#firstNameTrack').value,
        lastNameTrack: tmpl.find('#lastNameTrack').value,
        sportTrack: tmpl.find('#sportTrack').value,
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
