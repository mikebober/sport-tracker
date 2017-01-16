import { Players } from '../../api/players/players.js';
import { addPlayer } from '../../api/players/methods.js';

Template.Players.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
      firstName: tmpl.find('#firstName').value,
      lastName: tmpl.find('#lastName').value,
      goals: tmpl.find('#goals').value,
      time: tmpl.find('#time').value,
      sport: tmpl.find('#sport').value
      //creates object with forum data
    };

    Players.insert(player);

    tmpl.find('#firstName').value="";
    tmpl.find('#lastName').value="";
    tmpl.find('#goals').value="";
    tmpl.find('#time').value="";
    tmpl.find('#sport').value="";
    //emptys field

  }
});
