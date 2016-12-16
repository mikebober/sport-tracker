Template.Team.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const team= {
      school: tmpl.find('#school').value,
      sport: tmpl.find('#sport').value,
      wins: tmpl.find('#wins').value,
      loses: tmpl.find('#loses').value
      //creates object with forum data
    };

    tmpl.find('#school').value="";
    tmpl.find('#sport').value="";
    tmpl.find('#wins').value="";
    tmpl.find('#loses').value="";
    //emptys field

    Teams.insert(team);
  }
});
