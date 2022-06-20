module.exports = {
  schema: [
    {
      'http://graphql-engine:8080/v1/graphql': {
        headers: {
          'x-hasura-role': 'admin',
        },
      },
    },
  ],
  documents: ['src/graphql/queries/*.graphql'],
  overwrite: true,
  generates: {
    'src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
