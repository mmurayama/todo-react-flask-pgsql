FROM python:3.6-slim-buster

RUN apt-get update && apt-get install -qq -y \
    build-essential libpq-dev --no-install-recommends

ENV INSTALL_PATH /todo
RUN mkdir -p ${INSTALL_PATH}
RUN mkdir -p /var/log/todo

WORKDIR ${INSTALL_PATH}

COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

CMD gunicorn --worker-class=eventlet --log-level debug --access-logfile /var/log/todo/gunicorn-access.log --error-logfile /var/log/todo/gunicorn-error.log --bind 0.0.0.0:8000 "todo.app:create_app()" 