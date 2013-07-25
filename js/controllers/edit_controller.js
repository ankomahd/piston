DirecTalk.ProjectsEditController = Ember.ObjectController.extend({

});

DirecTalk.MessageNewController = Ember.ObjectController.extend({
	needs: ['project'],
	
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
		this.get('target').transitionTo('message.index');
		/*
		var project = this.get(('controllers.project.content'));
		var message = DirecTalk.Message.createRecord({project: project, title: this.get('title'), message: this.get('message'), date: this.get('date')});
		this.get('target').transitionTo('message.show');*/
	},
	cancel: function(){
		this.get('target').transitionTo('message.index');
	}
	
});
/*
DirecTalk.MessageEditController = Ember.ObjectController.extend({
	content: null
});*/