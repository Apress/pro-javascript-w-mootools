Class.Mutators.GetterSetter = function(properties){
    var klass = this;
    Array.from(properties).each(function(property){
        var captProp = property.capitalize(),   // changes 'prop' to 'Prop'
            $prop    = '$' + property;          // changes 'prop' to '$prop'

        // setter method
        klass.implement('set' + captProp, function(value){
            this[$prop] = value;
            return this;
        });

        // getter method
        klass.implement('get' + captProp, function(value){
            return this[$prop];
        });
    });
};
