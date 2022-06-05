.PHONY: setup build build-image run run-image push push-image lint

setup:
	yarn install

build:
	yarn run build
	
build-image:
	docker build -t personal-website .

run:
	yarn run serve

run-image:
	docker run -it -d -p 80:80 --rm personal-website

push: push-image

push-image: build-image
	docker tag personal-website maxclavel93/personal-website:latest
	docker push maxclavel93/personal-website:latest

lint:
	yarn run lint