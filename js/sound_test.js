var sounds = {};

var available_sounds = [
  "Baa-Low",
  "Baa1",
  "Bang1",
  "Bang2",
  "Bang3",
  "Bang4",
  "Bang5",
  "Bang6",
  "Bang7",
  "Bang8",
  "Bristol-Accept1",
  "Bristol-Accept2",
  "Bristol-Greeting1",
  "Bristol-Rejection1",
  "Bristol-Rejection2",
  "Cockney-Accept1",
  "Cockney-Accept2",
  "Cockney-Greeting1",
  "Cockney-Rejection1",
  "Cockney-Rejection2",
  "Dog1",
  "Dog2",
  "German-Accept1",
  "German-Hanz",
  "German-Hello",
  "German-Reject1",
  "German-Speaktome",
  "German-Whatisthedeal1",
  "German-Whatisthedeal2",
  "Horse1",
  "Horse2",
  "Meat-Grinder",
  "Moo-Panicked",
  "Moo-Slow",
  "Posh-Accept1",
  "Posh-Accept2",
  "Posh-Hello",
  "Posh-Rejection",
  "Quack-Donald",
  "Quack1",
  "Quack2",
  "Quack3",
  "Telephone-Ring"
];

$(function(){
  var soundManager;

  var loadSounds = function(){
    soundManager = new WCP.SoundManager();
    $.each(available_sounds,function(i,id){
      WCP.Assets.add(id, ['/assets/audio/'+id+'.wav.mp3']);
    });
  };

  loadSounds();

  WCP.Assets.load('*', null, function(){
    $.each(available_sounds,function(i,id){
      sounds[id] = soundManager.channel(WCP.Assets.get(id), {id: id});
    });
  });

});
