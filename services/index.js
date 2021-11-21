import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                  node {
                    author {
                      bio
                      name
                      id
                      photo {
                        url
                      }
                    }
                    createdAt
                    title
                    slug
                    featuredImage {
                      url
                    }
                    categories {
                      name
                      slug
                    }
                    excerpt
                  }
                }
              }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}