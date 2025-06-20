# This is a Full Stack Java Web Dev exercise

Tools & Tech Stack

- **Backend**: Java, Spring Boot, Spring JDBC
- **Frontend**: React (with MUI)
- **Database**: MySQL
- **Templating**: Thymeleaf (for backend UI)
- **Build Tool**: Gradle
- **Deployment**: Docker (or Tomcat)
- **Version Control**: Git & GitHub

## Quick Start (Using Docker Compose)

> Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.

Build & Deploy All Services

From the **root of the project**,(powershell) run:

```
docker-compose up --build
```
**Thymeleaf**
http://localhost:8080/

**React**
http://localhost:3000/

stop:
```
control + c
```
redeploy:
```
docker-compose up
```
stop and remove:
```
docker-compose down
```

build each container individually:

DataBase

pull mysql image, run, and set environment variables
run from root or parent dir for sql DDL
```
docker run -d --name mysql-db `
  --env "MYSQL_ROOT_PASSWORD=secret" `
  --env "MYSQL_DATABASE=mydb" `
  --env "MYSQL_USER=appuser" `
  --env "MYSQL_PASSWORD=apppass" `
  -v "${PWD}\mysql-init:/docker-entrypoint-initdb.d" `
  -p 3306:3306 `
  mysql:8
```


Backend

run in backend directory

1. Build the backend image:
```
docker build -t my-backend .
```
3. Run it:
```
docker run -d -p 8080:8080  --name backend-jsb my-backend
```
3. Confirm it works:
8080 '/' (index) should return Thymeleaf page
If your app starts successfully and serves on port 8080, you're good to move forward with Kubernetes deployment.


UI

run in ui directory

1. Build the image:
```
docker build -t react-frontend .
```
3. Run it:
```
docker run -d -p 3000:80 --name uniUI react-frontend
```
3. Confirm it works:
3000 '/' (index) should return React (with MUI)


For local run follow README in each sub project.

Example ids input:
1
2
