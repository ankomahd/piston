DirecTalk.Router.map(function(){
	this.resource('projects', {path: '/'}, function(){
		this.resource('project', {path: '/projects/:project_id'}, function(){
				this.resource('message', {path: '/message'}, function(){
					this.route('show', {path: '/:message_id'});
					this.route('edit', {path: '/:message_id/edit'});
					this.route('new');
				});
		});
	});
});

DirecTalk.MessagesRoute = Ember.Route.extend({
	model: function (){
		 return DirecTalk.Message.find();
	}
});

DirecTalk.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return DirecTalk.Project.find();
	}
});

DirecTalk.ProjectIndexRoute = Ember.Route.extend({
	model: function(){
		return DirecTalk.Project.find();
	}
});

DirecTalk.MessageNewRoute = Ember.Route.extend({
	model: function(){
		return DirecTalk.Message.find();
	}
});
/*DirecTalk.MessageNewRoute = Ember.Route.extend({
	model: function(){
		return DirecTalk.Message.createRecord();
	},
	exit: function(){
		this._super();	
		this.get('currentModel.transaction').rollback();
	},
	
	events: {
		save: function(message){
			message.one('didUpdate', this, function(){
				this.transitionTo("message.show", message);
			});
			message.get('transaction').commit();
		},
		cancel: function(message) {
    		this.transitionTo("message.index");
    	}
	}
	
});*/

DirecTalk.MessageEditRoute = Ember.Route.extend({
	model: function(){
		return DirecTalk.Message.find();
	},
	exit: function() {
	    this._super();
	    tx = this.get('currentModel.transaction')
	    if (tx)
	      tx.rollback();
  	},
 
	events: {
		save: function(message){
			message.one('didUpdate', this, function(){
				this.transitionTo("message.show", message);
			});
			message.get('transaction').commit();
		},
		cancel: function(message) {
    		this.transitionTo("message.show", message);
    	}
	}
});