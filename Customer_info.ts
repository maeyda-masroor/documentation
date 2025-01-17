export default {
    name: 'customer_info',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'username',
        type: 'string',
        title: 'Username',
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: (Rule:any) => Rule.required().email(),
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        description: 'Encrypted password.',
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
        initialValue: 'customer',
      },
      {
        name: 'address',
        type: 'array',
        title: 'Addresses',
        of: [{ type: 'reference', to: [{ type: 'address' }] }],
      },
    ],
  };
  