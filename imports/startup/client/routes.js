import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import MainLayout from '../../ui/layouts/mainlayout.html';
import Teams from '../../ui/views/data/teams.html';
import Players from '../../ui/views/data/players.html';
import Basketplayers from '../../ui/views/data/basketplayers.html';
import Home from '../../ui/views/home.html';
import Page1 from '../../ui/views/page1.html';
import Page2 from '../../ui/views/page2.html';
import Page3 from '../../ui/views/page3.html';
import bsoccer from '../../ui/views/bsoccer.html';
import football from '../../ui/views/football.html';
import gsoccer from '../../ui/views/gsoccer.html';
import fieldhockey from '../../ui/views/fieldhockey.html';
import baseball from '../../ui/views/baseball.html';
import bbasketball from '../../ui/views/bbasketball.html';
import blacrosse from '../../ui/views/blacrosse.html';
import boutdoortrack from '../../ui/views/boutdoortrack.html';
import btennis from '../../ui/views/btennis.html';
import gbasketball from '../../ui/views/gbasketball.html';
import glacrosse from '../../ui/views/glacrosse.html';
import golf from '../../ui/views/golf.html';
import goutdoortrack from '../../ui/views/goutdoortrack.html';
import gtennis from '../../ui/views/gtennis.html';
import hockey from '../../ui/views/hockey.html';
import softball from '../../ui/views/softball.html';
import volleyball from '../../ui/views/volleyball.html';
import wrestiling from '../../ui/views/wrestiling.html';
import data from '../../ui/views/data/data.html';
import updateteam from '../../ui/views/data/updateteam.html';
import updateplayer from '../../ui/views/data/updateplayer.html';
import soccer from '../../ui/views/data/soccer.html';
import footbal from '../../ui/views/data/footbal.html';
import field from '../../ui/views/data/field.html';
import volley from '../../ui/views/data/volley.html';
import hoc from '../../ui/views/data/hoc.html';
import wrest from '../../ui/views/data/wrest.html';
import base from '../../ui/views/data/base.html';
import soft from '../../ui/views/data/soft.html';
import track from '../../ui/views/data/track.html';
import lax from '../../ui/views/data/lax.html';
import ten from '../../ui/views/data/ten.html';
import gol from '../../ui/views/data/gol.html';
import laxupdate from '../../ui/views/data/laxupdate.html';
import softballupdate from '../../ui/views/data/softballupdate.html';
import baseupdate from '../../ui/views/data/baseupdate.html';


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

    BlazeLayout.render('MainLayout',{main:'Gsoccer'});
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
FlowRouter.route('/players',{
  name:'players',
  action(){

    BlazeLayout.render('MainLayout',{main:'Players'});
  }
})
FlowRouter.route('/data',{
  name:'data',
  action(){

    BlazeLayout.render('MainLayout',{main:'Data'});
  }
})
FlowRouter.route('/updateteam',{
  name:'updateteam',
  action(){

    BlazeLayout.render('MainLayout',{main:'Updateteam'});
  }
})
FlowRouter.route('/updateplayer',{
  name:'updateplayer',
  action(){

    BlazeLayout.render('MainLayout',{main:'Updateplayer'});
  }
})
FlowRouter.route('/basketplayers',{
  name:'basketplayers',
  action(){

    BlazeLayout.render('MainLayout',{main:'Basketplayers'});
  }
})
FlowRouter.route('/soccer',{
  name:'soccer',
  action(){

    BlazeLayout.render('MainLayout',{main:'Soccer'});
  }
})
FlowRouter.route('/footbal',{
  name:'footbal',
  action(){

    BlazeLayout.render('MainLayout',{main:'Footbal'});
  }
})
FlowRouter.route('/field',{
  name:'field',
  action(){

    BlazeLayout.render('MainLayout',{main:'Field'});
  }
})
FlowRouter.route('/volley',{
  name:'volley',
  action(){

    BlazeLayout.render('MainLayout',{main:'Volley'});
  }
})
FlowRouter.route('/hoc',{
  name:'hoc',
  action(){

    BlazeLayout.render('MainLayout',{main:'Hoc'});
  }
})
FlowRouter.route('/wrest',{
  name:'wrest',
  action(){

    BlazeLayout.render('MainLayout',{main:'Wrest'});
  }
})
FlowRouter.route('/base',{
  name:'base',
  action(){

    BlazeLayout.render('MainLayout',{main:'Base'});
  }
})
FlowRouter.route('/soft',{
  name:'soft',
  action(){

    BlazeLayout.render('MainLayout',{main:'Soft'});
  }
})
FlowRouter.route('/track',{
  name:'track',
  action(){

    BlazeLayout.render('MainLayout',{main:'Track'});
  }
})
FlowRouter.route('/lax',{
  name:'lax',
  action(){

    BlazeLayout.render('MainLayout',{main:'Lax'});
  }
})
FlowRouter.route('/ten',{
  name:'ten',
  action(){

    BlazeLayout.render('MainLayout',{main:'Ten'});
  }
})
FlowRouter.route('/gol',{
  name:'gol',
  action(){

    BlazeLayout.render('MainLayout',{main:'Gol'});
  }
})
FlowRouter.route('/laxupdate/:id',{
  name:'laxupdate',
  action(){

    BlazeLayout.render('MainLayout',{main:'Laxupdate'});
  }
})
FlowRouter.route('/softballupdate/:id',{
  name:'softballupdate',
  action(){

    BlazeLayout.render('MainLayout',{main:'Softballupdate'});
  }
})
FlowRouter.route('/baseupdate/:id',{
  name:'baseupdate',
  action(){

    BlazeLayout.render('MainLayout',{main:'Baseupdate'});
  }
})
