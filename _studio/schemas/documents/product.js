export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'text',
		},
		{
			title: 'Price',
			name: 'price',
			description: 'Price * 100',
			type: 'number',
		},
		{
			title: 'Avaliability',
			name: 'avaliability',
			type: 'number',
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: { type: 'category' }
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: { type: 'brand' }
		}
	],

	preview: {
		select: {
			name: 'name',
			brand: 'brand.name',
			category: 'category.name',
			image: 'image',
			inStock: 'avaliability'
		},

		prepare: (fields) => {
			return {
				title: fields.name,
				subtitle: `[${fields.inStock}] ${fields.brand} | ${fields.category}`,
				media: fields.image
			}
		}
	}
}