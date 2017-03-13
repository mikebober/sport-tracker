import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Players.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
      firstName: tmpl.find('#firstName').value,
      lastName: tmpl.find('#lastName').value,
      position: tmpl.find('#position').value,
      goals: tmpl.find('#goals').value,
      assits: tmpl.find('#assits').value,
      sport: tmpl.find('#sport').value,
      //golf
      firstNameGolf: tmpl.find('#firstNameGolf').value,
      lastNameGolf: tmpl.find('#lastNameGolf').value,
      sportGolf: tmpl.find('#sportGolf').value,
      avgdrive: tmpl.find('#avgdrive').value,
      //tennis
      firstNameT: tmpl.find('#firstNameT').value,
      lastNameT: tmpl.find('#lastNameT').value,
      sportT: tmpl.find('#sportT').value,
      won: tmpl.find('#won').value,
      //track
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
      pole: tmpl.find('#pole').value,
      shortput: tmpl.find('#shortput').value,
      discces: tmpl.find('#discces').value,
      javulin: tmpl.find('#javulin').value,
      //football
      firstNameF: tmpl.find('#firstNameF').value,
      positionF: tmpl.find('#positionF').value,
      lastNameF: tmpl.find('#lastNameF').value,
      sportF: tmpl.find('#sportF').value,
      reciving: tmpl.find('#reciving').value,
      rush: tmpl.find('#rush').value,
      td: tmpl.find('#td').value,
      tackels: tmpl.find('#tackels').value,
      sacks: tmpl.find('#sacks').value,
      inter: tmpl.find('#inter').value,
      //volleyball
      firstNameV: tmpl.find('#firstNameV').value,
      lastNameV: tmpl.find('#lastNameV').value,
      kills: tmpl.find('#kills').value,
      points: tmpl.find('#points').value,
      assitsV: tmpl.find('#assitsV').value,
      sportV: tmpl.find('#sportV').value
      //creates object with forum data
    };

    //emptys field
    tmpl.find('#firstName').value="";
    tmpl.find('#lastName').value="";
    tmpl.find('#position').value="";
    tmpl.find('#goals').value="";
    tmpl.find('#assits').value="";
    tmpl.find('#sport').value="";
    //golf
    tmpl.find('#firstNameGolf').value="";
    tmpl.find('#lastNameGolf').value="";
    tmpl.find('#sportGolf').value="";
    tmpl.find('#avgdrive').value="";
    //tennis
    tmpl.find('#firstNameT').value="";
    tmpl.find('#lastNameT').value="";
    tmpl.find('#sportT').value="";
    tmpl.find('#won').value="";
    //track
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
    tmpl.find('#shortput').value="";
    tmpl.find('#discces').value="";
    tmpl.find('#javulin').value="";
    //football
    tmpl.find('#firstNameF').value="";
    tmpl.find('#lastNameF').value="";
    tmpl.find('#positionF').value="";
    tmpl.find('#sportF').value="";
    tmpl.find('#reciving').value="";
    tmpl.find('#rush').value="";
    tmpl.find('#td').value="";
    tmpl.find('#tackels').value="";
    tmpl.find('#sacks').value="";
    tmpl.find('#inter').value="";
    //volleyball
    tmpl.find('#firstNameV').value="";
    tmpl.find('#lastNameV').value="";
    tmpl.find('#kills').value="";
    tmpl.find('#points').value="";
    tmpl.find('#assitsV').value="";
    tmpl.find('#sportV').value="";
    Players.insert(player);
  }
});
