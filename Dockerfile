FROM debian:latest
RUN apt-get -y update && apt-get install -y curl git
RUN curl --silent --location https://deb.nodesource.com/setup_0.12 | bash -
RUN apt-get -y update && apt-get install -y nodejs
RUN git clone https://github.com/jthiatt/mesos_demo/

