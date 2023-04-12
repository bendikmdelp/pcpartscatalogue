export default Structure => {
	const {divider, editor, list, listItem, documentTypeList, documentTypeListItem} = Structure;

	return list()
		.title('Product Catalogue')
		.showIcons(false)
		.items([
			documentTypeListItem('product'),

			divider(),

			documentTypeListItem('brand'),

			divider(),
			
			documentTypeListItem('category')
		])
}