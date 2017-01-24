import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import MainLayout from '../../ui/layouts/mainlayout.html';
import Teams from '../../ui/views/teams.html';
import Players from '../../ui/views/players.html';
import Home from '../../ui/views/home.html';
import Page1 from '../../ui/views/page1.html';
import Page2 from '../../ui/views/page2.html';
import Page3 from '../../ui/views/page3.html';
import bsoccer from '../../ui/views/bsoccer.html';
import football from '../../ui/views/football.html';
import gsoccer from '../../ui/views/gsoccer.html';
import fieldhockey from '../../ui/views/fieldhockey.html';
// Add more templates here



import '../../ui/layouts/navigation.html';

FlowRouter.route('/',{
  name:'Home',
  action(){

    BlazeLayout.render('MainLayout',{main:'Home'});
  }
})
FlowRouter.route('/page1',{
  name:'Page1',
  action(){

    BlazeLayout.render('MainLayout',{main:'Page1'});
  }
})
FlowRouter.route('/page2',{
  name:'Page2',
  action(){

    BlazeLayout.render('MainLayout',{main:'Page2'});
  }
})
FlowRouter.route('/page3',{
  name:'Page3',
  action(){

    BlazeLayout.render('MainLayout',{main:'Page3'});
  }
})
//end of nav bar

//start of team pages
FlowRouter.route('/bsoccer',{
  name:'bsoccer',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bsoccer'});
  }
})
FlowRouter.route('/gsoccer',{
  name:'gsoccer',
  action(){

    BlazeLayout.render('MainLayout',{main:'gsoccer'});
  }
})
FlowRouter.route('/football',{
  name:'football',
  action(){

    BlazeLayout.render('MainLayout',{main:'Football'});
  }
})
FlowRouter.route('/fieldhockey',{
  name:'fieldhockey',
  action(){

    BlazeLayout.render('MainLayout',{main:'Fieldhockey'});
  }
})
FlowRouter.route('/volleyball',{
  name:'volleyball',
  action(){

    BlazeLayout.render('MainLayout',{main:'Volleyball'});
  }
})
FlowRouter.route('/gcrosscountry',{
  name:'gcrosscountry',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gcrosscountry'});
  }
})
FlowRouter.route('/bcrosscountry',{
  name:'bcrosscountry',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bcrosscountry'});
  }
})
FlowRouter.route('/bbasketball',{
  name:'bbasketball',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bbasketball'});
  }
})
FlowRouter.route('/gbasketball',{
  name:'gbasketball',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gbasketball'});
  }
})
FlowRouter.route('/bindoortrack',{
  name:'bindoortrack',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bindoortrack'});
  }
})
FlowRouter.route('/gindoortrack',{
  name:'gindoortrack',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gindoortrack'});
  }
})
FlowRouter.route('/gswimming',{
  name:'gswimming',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gswimming'});
  }
})
FlowRouter.route('/bswimming',{
  name:'bswimming',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bswimming'});
  }
})
FlowRouter.route('/hockey',{
  name:'hockey',
  action(){

    BlazeLayout.render('MainLayout',{main:'Hockey'});
  }
})
FlowRouter.route('/wrestiling',{
  name:'wrestiling',
  action(){

    BlazeLayout.render('MainLayout',{main:'Wrestiling'});
  }
})
FlowRouter.route('/baseball',{
  name:'baseball',
  action(){

    BlazeLayout.render('MainLayout',{main:'Baseball'});
  }
})
FlowRouter.route('/softball',{
  name:'softball',
  action(){

    BlazeLayout.render('MainLayout',{main:'Softball'});
  }
})
FlowRouter.route('/goutdoortrack',{
  name:'goutdoortrack',
  action(){

    BlazeLayout.render('MainLayout',{main:'Goutdoortrack'});
  }
})
FlowRouter.route('/boutdoortrack',{
  name:'boutdoortrack',
  action(){

    BlazeLayout.render('MainLayout',{main:'Boutdoortrack'});
  }
})
FlowRouter.route('/golf',{
  name:'golf',
  action(){

    BlazeLayout.render('MainLayout',{main:'Golf'});
  }
})
FlowRouter.route('/glacrosse',{
  name:'glacrosse',
  action(){

    BlazeLayout.render('MainLayout',{main:'Glacrosse'});
  }
})
FlowRouter.route('/blacrosse',{
  name:'blacrosse',
  action(){

    BlazeLayout.render('MainLayout',{main:'Blacrosse'});
  }
})
FlowRouter.route('/btennis',{
  name:'btennis',
  action(){

    BlazeLayout.render('MainLayout',{main:'Btennis'});
  }
})
FlowRouter.route('/gtennis',{
  name:'gtennis',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gtennis'});
  }
})
//end of team pages

//start of player stat pages
FlowRouter.route('/gsoccerplayers',{
  name:'gsoccerplayers',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gsoccerplayers'});
  }
})
FlowRouter.route('/bsoccerplayers',{
  name:'bsoccerplayers',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bsoccerplayers'});
  }
})
FlowRouter.route('/footballplayers',{
  name:'footballplayers',
  action(){

    BlazeLayout.render('MainLayout',{main:'Footballplayers'});
  }
})
FlowRouter.route('/fieldhockeyplayers',{
  name:'fieldhockeyplayers',
  action(){

    BlazeLayout.render('MainLayout',{main:'Fieldhockeyplayers'});
  }
})
FlowRouter.route('/volleyballplayers',{
  name:'volleyballplayers',
  action(){

    BlazeLayout.render('MainLayout',{main:'Volleyballplayers'});
  }
})
FlowRouter.route('/bccp',{
  name:'bccp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bccp'});
  }
})
FlowRouter.route('/gccp',{
  name:'gccp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gccp'});
  }
})
FlowRouter.route('/bbp',{
  name:'bbp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bbp'});
  }
})
FlowRouter.route('/bitp',{
  name:'bitp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bitp'});
  }
})
FlowRouter.route('/gitp',{
  name:'gitp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gitp'});
  }
})
FlowRouter.route('/gswimmingp',{
  name:'gswimmingp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gswimmingp'});
  }
})
FlowRouter.route('/bsp',{
  name:'bsp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bsp'});
  }
})
FlowRouter.route('/hp',{
  name:'hp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Hp'});
  }
})
FlowRouter.route('/wp',{
  name:'wp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Wp'});
  }
})
FlowRouter.route('/bp',{
  name:'bp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Bp'});
  }
})
FlowRouter.route('/sp',{
  name:'sp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Sp'});
  }
})
FlowRouter.route('/botp',{
  name:'botp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Botp'});
  }
})
FlowRouter.route('/gotp',{
  name:'gotp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gotp'});
  }
})
FlowRouter.route('/glp',{
  name:'glp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Glp'});
  }
})
FlowRouter.route('/blp',{
  name:'blp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Blp'});
  }
})
FlowRouter.route('/btp',{
  name:'btp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Btp'});
  }
})
FlowRouter.route('/gtp',{
  name:'gtp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gtp'});
  }
})
FlowRouter.route('/gp',{
  name:'gp',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gp'});
  }
})
FlowRouter.route('/team',{
  name:'team',
  action(){

    BlazeLayout.render('MainLayout',{main:'Teams'});
  }
})
FlowRouter.route('/players',{
  name:'players',
  action(){

    BlazeLayout.render('MainLayout',{main:'Players'});
  }
})
