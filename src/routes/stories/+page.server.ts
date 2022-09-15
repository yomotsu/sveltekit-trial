import fs from 'fs';
// import type { LoadEvent } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load( { params }: ServerLoadEvent ) {
// page.server.ts ではなく page.ts でのブラウザの場合は↓
// export async function load( { fetch, params }: ServerEvent) {

	const res = fs.readFileSync( `src/data/index.json`, 'utf8' );
	const data = JSON.parse( res );

	return {
		list: data,
		props: {
			list: data,
		}
	};

}
