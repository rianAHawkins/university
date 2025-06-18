This is a Full Stack Java Web Dev exercise

Tools & Tech Stack

Backend: Java, Spring Boot, Spring JDBC
Frontend: React (with MUI)
Database: MySQL
Build: Gradle
Deployment: Tomcat or Docker
Version Control: GitHub
Templating : Thymeleaf

Download docker desktop: https://www.docker.com/products/docker-desktop/

This is for powershell:

Run all containers with compose:

Build and deploy
from root of project
docker-compose up --build

view-
Thymeleaf
http://localhost:8080/
React
http://localhost:3000/

stop-
control + c

redeploy-
docker-compose up

stop and remove-
docker-compose down


build each container individually:

DataBase

pull mysql image, run, and set environment variables
run from root or parent dir for sql DDL

docker run -d --name mysql-db `
  --env "MYSQL_ROOT_PASSWORD=secret" `
  --env "MYSQL_DATABASE=mydb" `
  --env "MYSQL_USER=appuser" `
  --env "MYSQL_PASSWORD=apppass" `
  -v "${PWD}\mysql-init:/docker-entrypoint-initdb.d" `
  -p 3306:3306 `
  mysql:8



Backend

run in backend directory

1. Build the backend image:
docker build -t my-backend .

2. Run it:
docker run -d -p 8080:8080  --name backend-jsb my-backend

3. Confirm it works:
8080 '/' (index) should return Thymeleaf page
If your app starts successfully and serves on port 8080, you're good to move forward with Kubernetes deployment.


UI

run in ui directory

1. Build the image:
docker build -t react-frontend .

2. Run it:
docker run -d -p 3000:80 --name uniUI react-frontend

3. Confirm it works:
3000 '/' (index) should return React (with MUI)


For local run follow README in each sub project.



