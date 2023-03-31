import { GRAPHQL_API } from "$env/static/private";
import { request, gql } from "graphql-request";

export async function load() {
    const query = gql`
    query MyQuery {
        blogs {
          publishedAt
          slug
          title
          description {
            html
          }
          thumbnail {
            url
          }
        }
      }
    `;

    const data = await request(GRAPHQL_API, query);

    return data;
}