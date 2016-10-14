Element.implement({

    switchClass: function(first, second){
        var hasSecond = this.hasClass(second);
        this.removeClass(hasSecond ? second : first);
        this.addClass(hasSecond ? first : second);
        return this;
    }

});
