export default ({ env }) => ({
  email: {
    config: {
      provider: 'dummy',
      providerOptions: {},
      settings: {
        defaultFrom: 'no-reply@example.com',
        defaultReplyTo: 'no-reply@example.com',
      },
    },
  },
});
