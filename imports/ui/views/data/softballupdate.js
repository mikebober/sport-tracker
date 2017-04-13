import { Players } from '../../../api/players/players.js';
import { addPlayer } from '../../../api/players/methods.js';

Template.Softballupdate.onCreated(function (){
  this.autorun(() => {
    this.subscribe('players.private', FlowRouter.getParam('id'));
  })
});

Template.Softballupdate.onRendered(function (){
    const player=Players.findOne(FlowRouter.getParam('id'))
    document.getElementById('firstNameSo').value = player.firstNameSo;
    document.getElementById('lastNameSo').value = player.lastNameSo;
    document.getElementById('battingS').value = player.battingS;
    document.getElementById('runsS').value = player.runsS;
});

Template.Softballupdate.events({
  'submit': (e, tmpl) => {
    e.preventDefault();

    const player={
        firstNameSo: tmpl.find('#firstNameSo').value,
        lastNameSo: tmpl.find('#lastNameSo').value,
        battingS: tmpl.find('#battingS').value,
        runsS: tmpl.find('#runsS').value
    };

    Players.update(FlowRouter.getParam('id'), {$set: {
        firstNameSo: tmpl.find('#firstNameSo').value,
        lastNameSo: tmpl.find('#lastNameSo').value,
        battingS: tmpl.find('#battingS').value,
        runsS: tmpl.find('#runsS').value
    }});

    tmpl.find('#firstNameSo').value="";
    tmpl.find('#lastNameSo').value="";
    tmpl.find('#battingS').value="";
    tmpl.find('#runsS').value="";

}

});
