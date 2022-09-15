import fs from 'fs';
// import type { LoadEvent } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load( { params }: ServerLoadEvent ) {
// page.server.ts ではなく page.ts でのブラウザの場合は↓
// export async function load( { fetch, params }: ServerEvent) {

	const data = fs.readFileSync( `src/data/${ params.slug }.json`, 'utf8' );

	return {
		id: data,
		// id: params.slug,
	};

}
