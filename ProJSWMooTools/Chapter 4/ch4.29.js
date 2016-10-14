var Phone = new Class({

    sound: 'phone.ogg',

    initialize: function(number){
        this.number = number;
    },

    call: function(from){
        this.ring();
        new Notification('New call!');
    },

    ring: function(sound){
        sound = sound || this.sound;
        new Sound(sound).play();
    }

});

var AlarmClock = new Class({

    sound: 'alarm.ogg',

    initialize: function(alarmTime){
        this.time = alarmTime;
    },

    alarm: function(time){
        if (time == this.time) {
            this.ring();
            new Notification('Wake up sleepy head!');
        }
    },

    ring: function(sound){
        sound = sound || this.sound;
        new Sound(sound).play();
    }

});

