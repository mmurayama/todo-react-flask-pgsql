FROM python:3.6-slim-buster

RUN apt-get update && apt-get install -qq -y \
    build-essential libpq-dev --no-install-recommends

ENV INSTALL_PATH /todo
RUN mkdir -p ${INSTALL_PATH}

WORKDIR ${INSTALL_PATH}

COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

# CMD gunicorn --worker-class=eventlet --log-level debug -c "python:config.gunicorn" "todo.app:create_app()"
CMD gunicorn --worker-class=eventlet --log-level debug --bind 0.0.0.0:8000 "todo.app:create_app()"