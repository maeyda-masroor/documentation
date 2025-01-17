export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'user',
        type: 'reference',
        title: 'customer_info',
        to: [{ type: 'customer_info' }],
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'address',
        type: 'reference',
        title: 'Shipping Address',
        to: [{ type: 'address' }],
      },
      {
        name: 'payment',
        type: 'reference',
        title: 'Payment',
        to: [{ type: 'payment' }],
      },
      {
        name: 'shipment',
        type: 'reference',
        title: 'Shipment',
        to: [{ type: 'shipment' }],
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        },
        initialValue: 'pending',
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  