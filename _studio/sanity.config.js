import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import productCatalogue from './structure/product-catalogue.js';
import settings from './structure/settings.js';

export default {
	title: 'Studio',

	projectId: 'yjbpalmy',
	dataset: 'production',

	plugins: [deskTool({
		title: 'Product Catalogue',
		name: 'product-catalogue',
		structure: productCatalogue
	}), 

	deskTool({
		title: 'Settings',
		name: 'settings',
		structure: settings
	}),
	
	visionTool()],

	schema: {
		types: schemas,
	},
};
