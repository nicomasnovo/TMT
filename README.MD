# TMT

This is a monorepo project created for educational purposes.
It consists on two Apps:

- **Backend App** that exposes an API made with Express (web framework for NodeJS). It's also connected to a MongoDB data base created from a Docker Image.
- **Frontend App** created with Reactjs (Frontend rendering library) and Vite (Frontend tool)

## Follow this instructions to locally run this project:

This project uses Makefile and Docker Compose to make it easier to work with.

In order to make it work you are going to need Docker on your Mac
If you don't have Docker please visit this site [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/) and download it first.

---

### Once you have installed Docker run this commands on your terminal (Have you heard of [iTerm2](https://iterm2.com/)?)

### 1) Install dependencies:

```
make install
```

### 2) Create Docker images:

```
make build
```

### 3) Run project with Docker Compose

```
make run
```

---

## After all that work you could be able to use this urls for your front-end and back-end apps

Server: http://localhost:3000
Client: http://localhost:3001
