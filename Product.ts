export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'colours',
        type: 'array',
        title: 'Available Colours',
        of: [{ type: 'string' }],
      },
      {
        name: 'beforeprice',
        type: 'number',
        title: 'Price Before Discount',
      },
      {
        name: 'afterprice',
        type: 'number',
        title: 'Price After Discount',
      },
      {
        name: 'categories_id',
        type: 'string',
        title: 'Category ID',
        description: 'ID of the category this product belongs to.',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        description: 'Tags to describe or group products (e.g., "latest", "featured").',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{ type: 'image' }],
      },
      {
        name: 'reviews',
        type: 'array',
        title: 'Reviews',
        of: [{ type: 'reference', to: [{ type: 'review' }] }],
      },
    ],
  };
  