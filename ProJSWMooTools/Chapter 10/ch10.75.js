function(event){
    event = new Event(event, self.getWindow());
    if (condition.call(self, event) === false) event.stop();
}
