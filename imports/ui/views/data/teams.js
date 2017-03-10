import { Teams } from '../../../api/teams/teams.js';
import { addTeam } from '../../../api/teams/methods.js';

Template.Teams.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    //creates object with form data
    const team = {
      school: tmpl.find('#school').value,
      sport: tmpl.find('#sport').value,
      wins: tmpl.find('#wins').value,
      loses: tmpl.find('#loses').value,
      ties: tmpl.find('#ties').value,
      state: tmpl.find('#state').value,
      fciac: tmpl.find('#fciac').value
    };

    //empties field
    tmpl.find('#school').value="";
    tmpl.find('#sport').value="";
    tmpl.find('#wins').value="";
    tmpl.find('#loses').value="";
    tmpl.find('#ties').value="";
    tmpl.find('#state').value="";
    tmpl.find('#fciac').value="";

    Teams.insert(team);
  }
});
