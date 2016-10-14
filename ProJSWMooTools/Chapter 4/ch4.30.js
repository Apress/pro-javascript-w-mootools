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

var AlarmClock = new Class({

    Implements: Ringer,

    initialize: function(alarmTime){
        this.time = alarmTime;
        this.sound = 'alarm.ogg';
    },

    alarm: function(time){
        if (time == this.time) {
            this.ring();
            new Notification('Wake up sleepy head!');
        }
    }

});

