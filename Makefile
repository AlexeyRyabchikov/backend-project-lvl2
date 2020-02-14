publish:
	npm publish --dry-run

install: npm install

start:
		npx node bin/gendiff.js

publish: 
		npm publish --dry-run

make lint:
		npx eslint .