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
          skill_used {
            ... on Skill {
              id
              name
            }
          }
        }
        skills(orderBy: name_ASC, first: 100) {
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