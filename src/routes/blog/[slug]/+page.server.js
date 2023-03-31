import { GRAPHQL_API } from "$env/static/private";
import { request, gql } from "graphql-request";

export async function load({ params }) {
    const query = gql`
    query MyQuery {
        blog(where: {slug: "${params.slug}"}) {
          createdAt
          publishedAt
          thumbnail {
            url
          }
          title
          content {
            html
          }
        }
      }
    `

    const data = await request(GRAPHQL_API, query);

    return data.blog;
}