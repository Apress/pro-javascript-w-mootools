var Ringer = new Class({

    sound: 'ring.ogg',

    ring: function(sound){
        sound = sound || this.sound;
        new Sound(sound).play();
    }

});

var Phone = new Class({

    Implements: Ringer,

    initialize: function(number){
        this.number = number;
        this.sound = 'phone.ogg';
    },

    call: function(from){
        this.ring();
        new Notification('New call!');
    }

});

var phone = new Phone(0000);
console.log(typeof phone.ring); // 'function'

Ringer.implement('ringLoudly', function(sound){
    sound = sound || this.sound;
    new Sound(sound).playLoudly()
});

console.log(typeof phone.ringLoudly); // 'undefined'

