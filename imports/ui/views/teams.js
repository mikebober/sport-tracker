import { Teams } from '../../api/teams/teams.js';
import { addTeam } from '../../api/teams/methods.js';

Template.Teams.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    //creates object with form data
    const team = {
      school: tmpl.find('#school').value,
      sport: tmpl.find('#sport').value,
      wins: tmpl.find('#wins').value,
      loses: tmpl.find('#loses').value
    };

    //empties field
    tmpl.find('#school').value="";
    tmpl.find('#sport').value="";
    tmpl.find('#wins').value="";
    tmpl.find('#loses').value="";

    Teams.insert(team);
  }
});
