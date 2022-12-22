# Todo App

#### HOW TO RUN:

1. make sure to create .env file in root directory and add below variables

```bash
PORT=
JWT_SECRET_KEY=
```

2. then run below commands

```bash
docker build . -t todo-app
```

- Note: Make sure to change the port number to be equale to what is defined in .env file

```bash
docker run -p $PORT:$PORT todo-app
```

#### Improvements

1. Adding test cases
2. Adding validation middleware on each endpoint
