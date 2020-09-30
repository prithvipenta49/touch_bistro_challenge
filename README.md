# touch_bistro_challenge
touch_bistro_challenge SRE challenge

Once the infra is ready, I have used Ansible as configuration management

Here is the deployment strategy
* install docker
* git clone project 
* deploy application on container using docker
* install nginx
* configure proxy for nginx
* restart nginx

I have initialised ansible role as nodejs
deploy.yml ---> nodejs(role) ---> tasks ---> main.yml

deploy.yml 
consists of ansible playbook start where I have stated ubuntu user will run the play and enabled escalation privilege. Then it is calling to nodejs role

inside nodejs role have multiple folder structure created as we initialise role
README.md  defaults  files  handlers  meta  tasks  templates  tests  vars

inside task main.yml file I have called different yml 
first is docker.yml. In this yml docker installation steps are given
second is git.yml. in this yml git clone to local is happening
third is app.yml. in this yml how image is built by dockerfile and container is launch steps are given
fourth is nginx.yml. this yml consists of installation and configuring proxy.
