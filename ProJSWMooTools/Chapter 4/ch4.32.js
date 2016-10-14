var Ringer = new Class({

    sound: 'ring.ogg',

    ring: function(sound){
        sound = sound || this.sound;
        new Sound(sound).play();
    }

});

var Phone = new Class({

    initialize: function(number){
        this.number = number;
        this.sound = 'phone.ogg';
    },

    call: function(from){
        this.ring();
        new Notification('New call!' + this.from);
    }

});

Phone.implement(new Ringer);

