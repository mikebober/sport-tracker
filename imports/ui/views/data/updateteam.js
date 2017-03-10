import { Teams } from '../../../api/teams/teams.js';

Template.Updateteam.onCreated(function (){
  this.autorun(() => {
    this.subscribe('teams.public');
  })
});

Template.Updateteam.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    //creates object with form data
    const team = {
      sport: tmpl.find('#sport').value,
      wins: tmpl.find('#wins').value,
      loses: tmpl.find('#loses').value,
      ties: tmpl.find('#ties').value,
      state: tmpl.find('#state').value,
      fciac: tmpl.find('#fciac').value
    };


    if(tmpl.find('#sport').value == "football"){
        const id = Teams.find({'sport' : 'football'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "boysSoccer"){
        const id = Teams.find({'sport' : 'boys soccer'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "girlsSoccer"){
        const id = Teams.find({'sport' : 'girls soccer'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "fieldhockey"){
        const id = Teams.find({'sport' : 'fieldhockey'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "volleyball"){
        const id = Teams.find({'sport' : 'volleyball'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "boys cross country"){
        const id = Teams.find({'sport' : 'boys cross country'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "girls cross country"){
        const id = Teams.find({'sport' : 'girls cross country'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "girls basketball"){
        const id = Teams.find({'sport' : 'girls basketball'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "boys basketball"){
        const id = Teams.find({'sport' : 'boys basketball'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "boys indoor track"){
        const id = Teams.find({'sport' : 'boys indoor track'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "girls indoor track"){
        const id = Teams.find({'sport' : 'girls indoor track'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "hockey"){
        const id = Teams.find({'sport' : 'hockey'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "boys swimming"){
        const id = Teams.find({'sport' : 'boys swimming'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "girls swimming"){
        const id = Teams.find({'sport' : 'girls swimming'}).fetch()[0]._id

        Teams.update(id, team);
    }
    else if(tmpl.find('#sport').value == "wrestiling"){
        const id = Teams.find({'sport' : 'wrestiling'}).fetch()[0]._id

        Teams.update(id, team);
    }


    //empties field
    tmpl.find('#sport').value="";
    tmpl.find('#wins').value="";
    tmpl.find('#loses').value="";
    tmpl.find('#ties').value="";
    tmpl.find('#state').value="";
    tmpl.find('#fciac').value="";

  }
});
