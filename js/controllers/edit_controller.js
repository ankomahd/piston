DirecTalk.ProjectsEditController = Ember.ObjectController.extend({

});

DirecTalk.MessageNewController = Ember.ObjectController.extend({
	needs: ['project'],
	content: null, 
	
	//save message
	save: function(){
		store = this.get("store");
		transaction = store.transaction();
		var message = transaction.createRecord(DirecTalk.Message, {});
		message.set('project', this.get('controllers.project.content'));
		message.set('title', this.get('title')); 
		message.set('message', this.get('message'));
		message.set(' date', this.get('date'));	
		
		message.one('didCreate', this,function(){});
		transaction.commit();
		this.set('message', "").set('title', "").set('date', "");
		this.get('target').transitionTo('message.index');
	},
	
	//cancel save
	cancel: function(){
		this.get('target').transitionTo('message.index');
	},
	
	exit: function(){
		
	}
	
	
});

DirecTalk.MessageShowController = Ember.ObjectController.extend({
	 
});
