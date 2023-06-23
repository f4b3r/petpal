FROM eclipse-temurin:17-jdk-alpine
MAINTAINER f4b3r
WORKDIR app
COPY target/petpal-core-1.0.0.jar petpal-core-1.0.0.jar
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app/petpal-core-1.0.0.jar"]
