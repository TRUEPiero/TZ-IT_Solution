dev:
	docker-compose --env-file .env -f ./docker-compose.dev.yml up -d --no-log-prefix app postgres