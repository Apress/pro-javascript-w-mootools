var Ringer = new Class({

    sound: 'ring.ogg',

    ring: function(sound){
        sound = sound || this.sound;
        new Sound(sound).play();
    }

});

var Charger = new Class({

    charge: function(){
        new ElectricalSocket().connect(this);
    }

});

var Phone = new Class({

    Implements: [Ringer, Charger],

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
console.log(typeof phone.charge); // 'function'

