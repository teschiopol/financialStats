# Financial Stats 📊

[![CI-test-todo](https://github.com/teschiopol/financialStats/actions/workflows/test.yml/badge.svg)](https://github.com/teschiopol/financialStats/actions/workflows/test.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/teschiopol/financialstats/badge)](https://www.codefactor.io/repository/github/teschiopol/financialstats)
[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/

[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

A local app to manage your personal finance based on relevance.

## Docker 🐳

Create image

```
docker build -t YOUR_DOCKER_ID/PROJECT_NAME . -f Run.Dockerfile   
```

Run container

```
docker run -p 8080:80 YOUR_DOCKER_ID/PROJECT_NAME
```

## Local 📝

```
npm install
```

### Compiles and hot-reloads for development 👨🏻‍💻

```
npm run serve
```

### Compiles and minifies for production 🚀

```
npm run build
```

### Run tests ✅

```
npm test
```

## Pocketbase 🗂

You need to install [Pocketbase](https://pocketbase.io/) and then eventually change the path in package.json.

The template is in src/assets/.

Don't forget to set the parameters in the env file.

### Screenshot 🖥

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
