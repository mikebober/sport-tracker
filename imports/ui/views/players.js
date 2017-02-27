import { Players } from '../../api/players/players.js';
import { addPlayer } from '../../api/players/methods.js';

Template.Players.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
      firstName: tmpl.find('#firstName').value,
      lastName: tmpl.find('#lastName').value,
      goals: tmpl.find('#goals').value,
      assits: tmpl.find('#assits').value,
      avgdrive: tmpl.find('#avgdrive').value,
      sport: tmpl.find('#sport').value
      //creates object with forum data
    };

    //emptys field
    tmpl.find('#firstName').value="";
    tmpl.find('#lastName').value="";
    tmpl.find('#goals').value="";
    tmpl.find('#assits').value="";
    tmpl.find('#avgdrive').value="";
    tmpl.find('#sport').value="";

    Players.insert(player);
  }
});
