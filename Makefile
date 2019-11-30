# first task will be the default task
# to make any task as default
# declare the task to .DEFAULT_GOAL
.DEFAULT_GOAL := default

default:
	@echo "script is working"

task%:
	sh ./sample.sh $*

test: 
	make task5 & make task15 & make task10 & wait;
	@echo "DONE"

pretty:
	./node_modules/.bin/prettier --write src/**/*.{js,jsx,tsx}

container:
	./node_modules/.bin/webpack-dev-server --host 0.0.0.0 --config webpack.dev.js

devContainer:
	docker-compose -f docker-compose.yml -f docker-compose-dev.yml up

prodContainer:
	docker-compose -f docker-compose.yml -f docker-compose-prod.yml up

prettier:
	./node_modules/.bin/prettier --check src/**/*.{js,jsx,tsx}

eslint:
	./node_modules/.bin/eslint --fix src/

format: 
	make prettier;
	make eslint
