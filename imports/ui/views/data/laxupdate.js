import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Laxupdate.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.private', FlowRouter.getParam('id'));
  })
});

Template.Laxupdate.onRendered(function (){
    const player=Players.findOne(FlowRouter.getParam('id'))
    document.getElementById('firstNameL').value = player.firstNameL;
    document.getElementById('lastNameL').value = player.lastNameL;
    document.getElementById('positionL').value = player.positionL;
    document.getElementById('goalsL').value = player.goalsL;
    document.getElementById('assitsL').value = player.assitsL;
});

Template.Laxupdate.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    const player={
        firstNameL: tmpl.find('#firstNameL').value,
        lastNameL: tmpl.find('#lastNameL').value,
        positionL: tmpl.find('#positionL').value,
        goalsL: tmpl.find('#goalsL').value,
        assitsL: tmpl.find('#assitsL').value
    };

    Players.update(FlowRouter.getParam('id'), {$set: {
        firstNameL: tmpl.find('#firstNameL').value,
        lastNameL: tmpl.find('#lastNameL').value,
        positionL: tmpl.find('#positionL').value,
        goalsL: tmpl.find('#goalsL').value,
        assitsL: tmpl.find('#assitsL').value
    }});

    tmpl.find('#firstNameL').value="";
    tmpl.find('#lastNameL').value="";
    tmpl.find('#positionL').value="";
    tmpl.find('#goalsL').value="";
    tmpl.find('#assitsL').value="";

}

});
