/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var runif = require( '@stdlib/random-iter-uniform' );
var itercumidrange = require( './../lib' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
	'seed': 1234,
	'iter': 100
});

// Create an iterator for iteratively computing a cumulative mid-range:
var it = itercumidrange( rand );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( typeof v.value === 'number' ) {
		console.log( 'mid-range: %d', v.value );
	}
	if ( v.done ) {
		break;
	}
}
