DirecTalk.Project = DS.Model.extend({
	messages: DS.hasMany('DirecTalk.Message', {inverse: 'project'}),
	name: DS.attr('string')
});


DirecTalk.Project.FIXTURES = [
	{
		id: 1,
		name: "Vodafone Business Solutions",
		messages: [3,2]
	},
	{
		id: 2,
		name: "MTN Business Solutions",
		messages: [1]
	}
];
