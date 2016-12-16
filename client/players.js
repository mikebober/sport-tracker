Template.Players.events({
  'submit': (e, tmpl) => {
    e.preventDefault();


    const player={
      school: tmpl.find('#firstName').value,
      sport: tmpl.find('#lastName').value,
      wins: tmpl.find('#goals').value,
      loses: tmpl.find('#time').value
      //creates object with forum data
    };

    tmpl.find('#firstName').value="";
    tmpl.find('#lastName').value="";
    tmpl.find('#goals').value="";
    tmpl.find('#time').value="";
    //emptys field

    Players.insert(player);
  }
});
