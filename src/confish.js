#!/usr/bin/env node
import fs from 'fs';
import app from 'commander';
import path from 'path';
import hogan from 'hogan.js';

app.version(require('../package.json').version)
	.usage('<template>')
	.parse(process.argv);


let source = path.resolve(process.cwd(), app.args[0]);
let input = fs.readFileSync(source, 'utf8');
let data = '';

process.stdin.on('data', d => data = data + d);
process.stdin.on('end', () => {
	process.stdout.write(hogan.compile(input).render(JSON.parse(data)));
});
