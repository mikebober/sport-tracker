import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Soccer.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
      firstName: tmpl.find('#firstName').value,
      lastName: tmpl.find('#lastName').value,
      position: tmpl.find('#position').value,
      goals: tmpl.find('#goals').value,
      assits: tmpl.find('#assits').value,
      sport: tmpl.find('#sport').value
    };

    tmpl.find('#firstName').value="";
    tmpl.find('#lastName').value="";
    tmpl.find('#position').value="";
    tmpl.find('#goals').value="";
    tmpl.find('#assits').value="";
    tmpl.find('#sport').value="";
    Players.insert(player);
  }

});
