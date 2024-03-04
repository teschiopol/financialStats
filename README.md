# Financial Stats 📊

[![CI-test-todo](https://github.com/teschiopol/financialStats/actions/workflows/test.yml/badge.svg)](https://github.com/teschiopol/financialStats/actions/workflows/test.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/teschiopol/financialstats/badge)](https://www.codefactor.io/repository/github/teschiopol/financialstats)
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/

[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

A local web app to manage your personal finance based on relevance.

## Setup💾

After clone the repo, install the dependencies.

```
npm install
```

### Docker 🐳

If you don't have, [install](https://docs.docker.com/guides/get-started/) it.

Download docker images from [here](https://hub.docker.com/repository/docker/teschi0p0l/financial_stats/general).

```shell
docker compose up     
```

### Pocketbase 🗂

1) Go to http://0.0.0.0:8090/_/

2) Log with data that you found in the env file.

3) Optional. If you have some problem, import the collection in 'Settings/
   Import collections'. The setup file is in setup/pb_schema.json.

For more info see [Pocketbase](https://pocketbase.io/).

### Run tests ✅

```
npm test
```

## Done 🥳

Just browse to [Home](http://localhost:8080/login)!

## Docker 🐳

More detail on docker.

Create app image.

```shell
docker build -t YOUR_DOCKER_ID/PROJECT_NAME . -f dockerfile/Run.Dockerfile   
```

Create Pocketbase image.

```shell
docker build -t YOUR_DOCKER_ID/PB_NAME . -f dockerfile/PB.Dockerfile   
```

Then modify the docker-compose.yml file with the name of the images that you just create.

If you want to run containers separately.

```shell
docker run -p 8080:80 YOUR_DOCKER_ID/PROJECT_NAME
```

```shell
docker run -p 8090:8090 YOUR_DOCKER_ID/PB_NAME
```

## Screenshot 📷

![home total compare](src/assets/doc/home_total_compare.png)

Compare every day with months to have a perception of your monthly expenses routine.

![home cat](src/assets/doc/home_cat.png)

Total of all categories.

![rel](src/assets/doc/rel.png)

Relevance subdivision.

![cat](src/assets/doc/cat.png)

Categories sample.

![list edit](src/assets/doc/list_edit.png)

Edit operation on data list.

### Credits 🦄

[Unicorne](https://www.unicorne.it/)
