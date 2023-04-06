import { GRAPHQL_API } from '$env/static/private';
import { request, gql } from 'graphql-request';

export async function load() {
	const query = gql`
		query MyQuery {
			blogs(orderBy: firstPublish_DESC) {
				description {
					html
				}
				slug
				firstPublish
				thumbnail {
					url
				}
				title
			}
		}
	`;

	const data = await request(GRAPHQL_API, query);

	return data;
}
