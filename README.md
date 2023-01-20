# Todo App

Todo app with MongoDB, Node, React, Docker and more.

> **Note:**
>
> The font-end is running in port:3000 and the back-end in port: 8080
>
> You need to setup the environments variables like in the _todo-backend/sample.env_ file.

## Run

To run this project you can use docker:

### Run Back-end and Front-end:

If do you want to run both clients, use:

```shell
docker compose up -d
```

### Run Back-end:

If you prefer run only the back-end use:

**With Docker**

```shell
cd todo-backend; docker compose up -d
```

**With Yarn**

```shell
cd todo-backend; yarn dev
```

> **Note:** You need to have MondgoDB installed for this command to work.

### Run Front-end:

If you prefer run only the front-end use:

**With Docker**

```shell
cd todo-react; docker compose up -d
```

**With Yarn**

```shell
cd todo-react; yarn start
```

:)
