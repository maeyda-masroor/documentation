export default {
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
      {
        name: 'method',
        type: 'string',
        title: 'Payment Method',
        options: {
          list: ['credit card', 'debit card', 'paypal', 'cash on delivery'],
        },
      },
      {
        name: 'transactionId',
        type: 'string',
        title: 'Transaction ID',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Payment Status',
        options: {
          list: ['pending', 'completed', 'failed'],
        },
        initialValue: 'pending',
      },
    ],
  };
  