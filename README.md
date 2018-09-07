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

User API CALL

```js
/* actions/questionnaires.js line 16 */
const response = await fetch('/questions');
```

OR use test datas from question.js

```js
/* actions/questionnaires.js line 20 */
await stall(3000);
const data = questionsJson;
```

The response from question is copied into questions.json

### b - Send The Choices

Data are sent to url defined in actions/questionnaires.js line 20

```js
/* actions/questionnaires.js line 8 */
const response = await fetch('/questions');
```

