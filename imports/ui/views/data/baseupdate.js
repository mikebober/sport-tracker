import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Baseupdate.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.private', FlowRouter.getParam('id'));
  })
});

Template.Baseupdate.onRendered(function (){
    const player=Players.findOne(FlowRouter.getParam('id'))
    document.getElementById('firstNameBa').value = player.firstNameBa;
    document.getElementById('lastNameBa').value = player.lastNameBa;
    document.getElementById('batting').value = player.batting;
    document.getElementById('runs').value = player.runs;
});

Template.Baseupdate.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    const player={
        firstNameBa: tmpl.find('#firstNameBa').value,
        lastNameBa: tmpl.find('#lastNameBa').value,
        batting: tmpl.find('#batting').value,
        runs: tmpl.find('#runs').value
    };

    Players.update(FlowRouter.getParam('id'), {$set: {
        firstNameBa: tmpl.find('#firstNameBa').value,
        lastNameBa: tmpl.find('#lastNameBa').value,
        batting: tmpl.find('#batting').value,
        runs: tmpl.find('#runs').value
    }});

    tmpl.find('#firstNameBa').value="";
    tmpl.find('#lastNameBa').value="";
    tmpl.find('#batting').value="";
    tmpl.find('#runs').value="";

}

});
