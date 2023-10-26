import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  //only want to scan .tsx files
  documents: 'client/src/**/*.tsx',
  generates: {
    //where to output generated code will be placed
    './src/__generated__/': {
      preset: 'client',
      presetConfig: {
        //TODO (customizing the graphql function)
        gqlTagName: 'gql',
      },
      //TODO
    },
  },
  //proceed with output even if no GraphQL operatins in frontend code  were found
  ignoreNoDocuments: true,
}

export default config
