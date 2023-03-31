import { GRAPHQL_API } from "$env/static/private";
import { request, gql } from "graphql-request";

export async function load() {
    const query = gql`
    query MyQuery {
        projects {
          github
          id
          thumbnail {
            url
          }
          title
          live
          description {
            html
          }
        }
        skills {
          id
          level
          name
        }
      }
    `

    const data = await request(GRAPHQL_API, query);
    return {
        projects: data.projects,
        skills: data.skills
    }
}