const schema = {
  properties: {
    body: {
      type: 'body',
      properties: {
        amount: {
          type: 'number',
        },
      },
      required: ['amount'],
    },
  },
  required: ['body'],
};
export default schema;