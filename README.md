# react-revealjs-questionnaire

## 1- Use create react app to create a new app for the questionnaire

```shell
$ npx create-react-app questionnaire
```

## 2 - Copy the dependencies of the package.json into the new app one

## 3 - Copy the files into the app src folder

## 4 - Import questionnaire.js into src/index.js

```js
import './questionnaire.js';
```
## 5 - Connect to API

### a - Receive Datas

```js
/* actions/questionnaires.js line 8 */
const response = await fetch('/questions');
```

The response from question is copied into questions.json

### b - Send The Choices

```js
/* actions/questionnaires.js line 8 */
const response = await fetch('/questions');
```

