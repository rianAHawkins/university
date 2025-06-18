Local run

application.properties local db:
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=#userName#
spring.datasource.password=#password#

run commands

./gradlew bootRun

./gradlew clean build

./gradlew --refresh-dependencies