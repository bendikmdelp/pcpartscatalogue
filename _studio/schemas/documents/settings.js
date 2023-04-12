export default {
	title: 'Settings',
	name: 'settings',
	type: 'document',
	fields: [
		{
			title: 'Announcement',
			name: 'announcement',
			type: 'object',
			fields: [
				{
					title: 'Text',
					name: 'text',
					type: 'string',
				},
				{
					title: 'Visible',
					name: 'visible',
					type: 'boolean',
				}
			]
		},
		{
			title: 'Contact e-mail',
			name: 'contactEmail',
			type: 'email',
		}
	],

	preview: {
		prepare: () => {
			return {
				title: 'Settings'
			}
		}
	}
}