export default {
    name: 'review',
    type: 'document',
    title: 'Review',
    fields: [
      {
        name: 'user',
        type: 'reference',
        title: 'User',
        to: [{ type: 'user' }],
      },
      {
        name: 'product',
        type: 'reference',
        title: 'Product',
        to: [{ type: 'product' }],
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule:any) => Rule.required().min(1).max(5),
      },
      {
        name: 'comment',
        type: 'text',
        title: 'Comment',
      },
    ],
  };
  