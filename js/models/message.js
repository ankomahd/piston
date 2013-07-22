DirecTalk.Message = DS.Model.extend({ 
   project: DS.belongsTo('DirecTalk.Project'),
   title: DS.attr('string'), 
   message: DS.attr('string'),
   date: DS.attr('string')
});


DirecTalk.Message.FIXTURES = [
	{
		id: 1,
		project: 2,
		title: 'TT1',
		message: 'Text TT1',
		date: 'July 28, 2013'
	},
	{	
		id: 2,
		project: 1,
		title: 'TT2',
		message: 'Text TT2',
		date: 'July 9, 2013'
	},
	{	
		id: 3,
		project: 1,
		title: 'TT3',
		message: 'Text TT3',
		date: 'July 12, 2013'
	}
];
