import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Players.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
      //golf
      firstNameGolf: tmpl.find('#firstNameGolf').value,
      lastNameGolf: tmpl.find('#lastNameGolf').value,
      sportGolf: tmpl.find('#sportGolf').value,
      avgdrive: tmpl.find('#avgdrive').value,
      //tennis

      //track
      firstNameTrack: tmpl.find('#firstNameTrack').value,
      lastNameTrack: tmpl.find('#lastNameTrack').value,
      sportTrack: tmpl.find('#sportTrack').value,
      field: tmpl.find('#sportTrackField').value,
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
      pole: tmpl.find('#pole').value,
      shortput: tmpl.find('#shortput').value,
      discces: tmpl.find('#discces').value,
      javulin: tmpl.find('#javulin').value,
      };
      //creates object with forum data

    //emptys field
    //golf
    tmpl.find('#firstNameGolf').value="";
    tmpl.find('#lastNameGolf').value="";
    tmpl.find('#sportGolf').value="";
    tmpl.find('#avgdrive').value="";
}});
