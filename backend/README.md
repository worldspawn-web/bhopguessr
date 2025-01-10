# Backend for Bhopguessr project

## Starting tutorial

### Appending environment variables

First, we need to create `.env` file in root backend project directory.

And append variables to start project correctly.

```dotenv
# Application settings
APPLICATION_NAME=app_name

# Server settings
SERVER_PORT=8000
TIMEOUT_DURATION=120_000

# Postgres settings
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=database_name
POSTGRES_USER=database_user
POSTGRES_PASSWORD=database_password
```

> For starting project via `Docker` we need to replace all `localhost` variables to your `IP address`

```shell
ipcongig
```
```
Windows IP Configuration

Ethernet adapter Ethernet:

   IPv4 Address. . . . . . . . . . . : 127.0.0.1
```

### Running database

navigate to backend root directory
```shell
cd ./backend
```

start database
```shell
docker compose -p bhopguessr up -d postgres
```
