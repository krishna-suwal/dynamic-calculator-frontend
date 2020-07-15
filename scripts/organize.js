const fs = require('fs');
const cpy = require('cpy');
const path = require('path');

(async () => {
	const __js_assets_dir = path.join( __dirname, '/../../assets/js' );
	const __css_assets_dir = path.join( __dirname, '/../../assets/css' );
	let error_occurred = false;
	let distributed_at_least_one_asset = false;

	(function() {
		return new Promise( resolve => {
			const build_asset_dir = path.join( __dirname, '/../build/static/js' );

			fs.readdir( build_asset_dir, function (err, files) {
				if ( err ) {
					return console.log( 'Failed to scan directory: ' + err );
				} 
		
				fs.access( __js_assets_dir, async function ( err ) {
					if ( err && err.code === 'ENOENT') {
						console.log( `JS Assets Directory does not exist! (${__js_assets_dir})` );
						error_occurred = true;
					} else {
						distributed_at_least_one_asset = true;

						files = files.map( file => path.join( build_asset_dir, file ) );
			
						await cpy( files, __js_assets_dir );
						console.log( 'JS Assets Distributed!' );
					}
					resolve();
				});
			});
		});
	})()
	.then(() => {
		return new Promise( resolve => {
			const build_asset_dir = path.join( __dirname, '/../build/static/css' );

			fs.readdir( build_asset_dir, function (err, files) {
				if ( err ) {
					return console.log( 'Failed to scan directory: ' + err );
				} 
		
				fs.access( __css_assets_dir, async function ( err ) {
					if ( err && err.code === 'ENOENT') {
						console.log( `CSS Assets Directory does not exist! (${__css_assets_dir})` );
						error_occurred = true;
					} else {
						distributed_at_least_one_asset = true;

						files = files.map( file => path.join( build_asset_dir, file ) );
			
						await cpy( files, __css_assets_dir );
						console.log( 'CSS Assets Distributed!' );
					}
					resolve();
				});
			});
		});
	})
	.then(() => {
		if ( false === error_occurred ) {
			console.log( '\nAll Assets Distributed Successfully!' );
		} else if ( true === distributed_at_least_one_asset ) {
			console.log( '\nOne or more assets distributed with one or more errors!' );
			console.log()
		} else {
			console.log( '\nNo Assets Distributed!' );
		}
	});
})();