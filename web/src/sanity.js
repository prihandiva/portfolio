import { createClient } from '@sanity/client'

// Instructions:
// 1. Run `npx sanity init` in the `studio` folder.
// 2. Add your project ID and dataset here.
// 3. To fetch data, replace `portfolioData` imports in components with `await sanityClient.fetch('*[_type == "profile"][0]')` etc.

export const sanityClient = createClient({
  projectId: 'YOUR_PROJECT_ID', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name if different
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-04-27', // use current date
})
