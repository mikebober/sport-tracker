import { Players } from '../../../api/players/players.js';

Template.Updateplayer.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.public');
  })
});

Template.Updateplayer.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    //creates object with form data
    const player = {
        firstName: tmpl.find('#firstName').value,
        lastName: tmpl.find('#lastName').value,
        goals: tmpl.find('#goals').value,
        assits: tmpl.find('#assits').value,
        sport: tmpl.find('#sport').value,
        firstNameGolf: tmpl.find('#firstNameGolf').value,
        lastNameGolf: tmpl.find('#lastNameGolf').value,
        sportGolf: tmpl.find('#sportGolf').value,
        avgdrive: tmpl.find('#avgdrive').value
    };

    if(tmpl.find('#sport').value == "football"){
        const id = Players.find({'sport' : 'football'}).fetch()[0]._id

        Players.update(id, player);
    } else if(tmpl.find('#sport').value == "boysSoccer"){
        const id = Players.find({'sport' : 'boys soccer'}).fetch()[0]._id

        Players.update(id, player);
    }

    //empties field
    tmpl.find('#firstName').value="";
    tmpl.find('#lastName').value="";
    tmpl.find('#goals').value="";
    tmpl.find('#assits').value="";
    tmpl.find('#sport').value="";
    tmpl.find('#firstNameGolf').value="";
    tmpl.find('#lastNameGolf').value="";
    tmpl.find('#sportGolf').value="";
    tmpl.find('#avgdrive').value="";
  }
});
