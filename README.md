# React Ready App

Based by [create-react-app](https://github.com/facebookincubator/create-react-app)

## Installation
```bash
npm install -g react-ready-app
````

## Quick start
Write in your terminal next command ```create-react-ready-app```

```bash
create-react-ready-app

In which directory to create the template?
MyProject

✔ Success

Next steps...
  cd MyProject
  npm install
````

## [Example project](https://github.com/bezrukavyi/to_do_react)

## What packages will you get?

* [react](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [redux-form](https://github.com/erikras/redux-form)
* [react-router](https://github.com/ReactTraining/react-router)
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
* [normalize-json-api](https://github.com/prenaudin/normalize-json-api)
* [lifecycle-connector](https://github.com/bezrukavyi/lifecycle-connector)
* [react-helmet](https://github.com/nfl/react-helmet)
* [react-ladda](https://github.com/jsdir/react-ladda)
* [react-feather](https://github.com/carmelopullara/react-feather)
* [ramda](https://github.com/ramda/ramda)
* [lodash](https://github.com/lodash/lodash)

## What ready things will you get?

* [App structure](#app-structure)
* [React structure](#react-structure)
* [Redux store structure](#reducers)
  - [Reducers](#reducers)
  - [Actions](#actions)
  - [Selectors](#selectors)
* [Environment varibales](#environment-varibales)
* [API connecting](#api-connecting)
* [Routes](#routes)
  - [AuthRoute](#authroute)
  - [UnAuthRoute](#unauthroute)
  - [MetaRoute](#metaroute)
* [Redux-form components](#redux-form-components)
  - [Fields](#fields)
  - [Form button](#form-button)
* [User authentication flow](#user-authentication-flow)
* [Styles structure](#styles-structure)

## App structure

You will get ready directories structure, which looks like:

```
├─ public
├─ src
│   ├─ components
│   ├─ constants
│   ├─ routes
│   ├─ store
│   ├─ styles
│   ├─ utils
│   ├─ App.js
│   ├─ index.js
│   ├─ registerServiceWorker.js
│   └─ storage.js
├─ .env
└─ .env.dev
```

| Directory    | Contain                                  
| -------------| ---------------------------------------------
| `components` | Components and containers
| `constants`  | Constants which you use in your project
| `routes`     | Custom routes
| `store`      | Logic which related with redux store (**reducers**, **selectors**, **actions**, **types**)
| `styles`     | SCSS files
| `utils`      | Your project helpers utils


## React structure
You will get structure for work react components

```
└─ components
│   ├─ User
│   |   ├─ SignInForm
│   │   │  ├─ Component.js
│   │   │  ├─ Container.js
│   │   │  └─ index.js
│   |   └─ SignUpForm
│   │      ├─ Component.js
│   │      ├─ Container.js
│   │      └─ index.js
```

#### Usage
In ```components/SignInForm/index.js```

```javascript
export { default } from './Container'
```

In ```components/User/index.js```
```javascript
import { default as SignInForm } from './SignInForm'
import { default as SignUpForm } from './SignUpForm'

export default { SignInForm, SignUpForm }
```

In ```components/Pages/SignIn.js```

```javascript
import React from 'react'

import User from 'components/User'

const SignIn = ({ children }) =>
  <div>
    <User.SignInForm />
  </div>

export default SignIn
```

## Redux store structure
You will get structure for work with redux store logic

```
└─ store
│   ├─ Api
│   ├─ Entities
│   |   │  ├─ Project
│   │   │  │  ├─ actions.js
│   │   │  │  ├─ index.js
│   │   │  │  ├─ selectors.js
│   │   |  │  └─ types.js
│   |   │  └─ Task
│   │   │     ├─ actions.js
│   │   │     ├─ index.js
│   │   │     ├─ selectors.js
│   │   |     └─ types.js
│   │   |
│   │   ├─ index.js
│   │   ├─ reducer.js
│   │   ├─ selectors.js
│   |   └─ utils.js
│   ├─ User
│   └─ ...
```

#### Reducers
You will get ready reducers for ```User``` and ```Entities```.
Reducer ```Entities``` adapted for any entities which you get from response in [json-api](http://jsonapi.org/) format

[Example](https://github.com/bezrukavyi/to_do_react/blob/master/src/store/Entities/reducer.js)

#### Usage
In ```src/store/Entities/reducer.js```

```javascript
import * as Utils from './utils'
import * as Project from './Project/types'
import { SUCCESS } from '../Api/types'

const entities = (state = {}, { type, payload }) => {
  switch (type) {
    case Project.PROJECT_LIST + SUCCESS: {
      return Utils.complement(state, payload.data)
    }
    default:
      return state
  }
}

export default entities
```

##### Response

```json
{
  "data":[
    {
      "id":"1",
      "type":"projects",
      "attributes":{
        "title":"Project 1",
      },
      "relationships":{
        "tasks":{
          "data":[
            {
              "id":"1",
              "type":"tasks"
            }
          ]
        }
      }
    },
    {
      "id":"2",
      "type":"projects",
      "attributes":{
        "title":"Project 2",
      },
      "relationships":{
        "tasks":{
          "data":[
            {
              "id":"2",
              "type":"tasks"
            }
          ]
        }
      }
    }
  ],
  "included":[
    {
      "id":"1",
      "type":"tasks",
      "attributes":{
        "title":"Task 1.1",
        "project-id":1
      }
    },
    {
      "id":"2",
      "type":"tasks",
      "attributes":{
        "title":"Task 2.1",
        "project-id":2
      }
    }
  ]
}
```

##### Store

```json
{
  "entities":{
    "projects":{
      "byId":{
        "1":{ "id":"1", "type":"projects", "title":"Project 1", "tasks":["1"] },
        "2":{ "id":"2", "type":"projects", "title":"Project 2", "tasks":["2"] }
      },
      "allIds":["1", "2"]
    },
    "tasks":{
      "byId":{
        "1":{ "id":"1", "type":"tasks", "title":"Task 1.1", "projectId":1 },
        "2":{ "id":"2", "type":"tasks", "title":"Task 2.1", "projectId":2 }
      },
      "allIds":["1", "2"]
    }
  }
}
```

#### Actions
Write [actions](https://github.com/bezrukavyi/to_do_react/blob/master/src/store/Entities/Project/actions.js) for special entity.

#### Selectors
You will get ready selectors for work with entities.

##### Usage

In ```src/store/Entities/selectors.js```

```javascript
import { values, map } from 'lodash'
import { store } from 'store'

const getEntities = () => store.getState().entities

export const allIds = (type) => values(get(getEntities(), `${type}.allIds`))

...
```

In ```container.js```
```javascript
import Entities from 'store/Entities'

Entities.selectors.allIds('tasks')
// {
//   "1":{ "id":"1", "type":"tasks", "title":"Task 1.1", "projectId":1 },
//   "2":{ "id":"2", "type":"tasks", "title":"Task 2.1", "projectId":2 }
// }
```

Also you can write you custom [selectors](https://github.com/bezrukavyi/to_do_react/blob/master/src/store/Entities/Project/selectors.js) for special entity

## Environment varibales

You will get opportunity to use environment variables

```
├─ .env
└─ .env.dev
```

#### Usage

In ```.env```

```
NODE_PATH=src/
REACT_APP_MY_VARIABLE="SOME VARIABLE"
```

```javascript
process.env.REACT_APP_MY_VARIABLE // return "SOME VARIABLE"
```

## Api connecting

You will get ready HTTP [methods](https://github.com/bezrukavyi/react-ready-app/blob/master/src/store/Api/actions.js#L43) for request to your API.
All response keys will be **converted** to comfortable ```CamelCase``` format.

#### Usage

Set API url in `.env`

```
REACT_APP_API_DOMAIN="http://localhost:3000/api/v1/"
```

```javascript
import Api from '../Api/actions'
import * as Types from './types'

export const postAction = (data) => Api.post('path', Types.ACTION_NAME, { data })
```

## Routes
You will get ready routes, like that:

#### AuthRoute
Use for path where must be only authenticated user

In ```src/App.js```
```javascript
...
<AuthRoute path={Path.UPDATE_PASSWORD} component={Pages.UpdatePassword} />
...
```

#### UnAuthRoute
Use for path where authenticated user mustn't be

In ```src/App.js```
```javascript
...
<UnAuthRoute path={Path.ROOT} component={Pages.SignIn} exact />
<UnAuthRoute path={Path.SIGN_UP} component={Pages.SignUp} exact />
...
```

#### MetaRoute
Add to pages meta info by their path. Based by [react-helmet](https://github.com/nfl/react-helmet).
[Configuration example](https://github.com/bezrukavyi/react-ready-app/blob/master/src/constants/Meta.js) of meta info by path.

## Redux-form components
You will get ready components for which work with [redux-form](https://github.com/erikras/redux-form)

#### Fields
[Fields](https://github.com/bezrukavyi/react-ready-app/tree/master/src/components/Fields) contain components for form fields, like that: ```input```, ```textarea```, ```select```, ```file```

```javascript
import React from 'react'

import { Fields } from 'components'

const SomeForm = ({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    <Fields.Input name='title' type='text' placeholder='input' />
    <Fields.FileInput name='file' type='file' placeholder='file' />
    <Fields.Textarea name='textarea' type='text' placeholder='textarea' />
    <Fields.Select name='select' type='text' placeholder='select' options={{
      'option_name_1': 'option_value_1',
      'option_name_2': 'option_value_2',
    }}/>
    ...
  </form>

export default SomeForm
```

#### Form button
[Form button](https://github.com/bezrukavyi/react-ready-app/blob/master/src/components/Buttons/Form.js) based by [react-ladda](https://github.com/jsdir/react-ladda) and adapted to [redux-form](https://github.com/erikras/redux-form)

```javascript
import React from 'react'

import { Buttons } from 'components'

const SomeForm = ({ handleSubmit, error, submitting }) =>
  <form onSubmit={handleSubmit}>
    ...

    <Buttons.Form className='black__theme' type='submit' loading={submitting} text='Submit' />
  </form>

export default SomeForm
```

#### User authentication flow
You will get ready standard user authentication flows, like that:
- Sign in
- Sign up
- OAuth
- Sign out
- Forgot password
- Reset password
- Update password


## Styles structure

You will get ready structure for write styles rules

```
...
└─ styles
├─ components
│   ├─ Form.scss
│   ├─ Landing.scss
│   ├─ Input.scss
│   └─ ...
└─ App.scss
```

In ```App.scss``` include all your styles

```scss
...
/* Components */
@import 'components/Form.scss';
@import 'components/Landing.scss';
@import 'components/Input.scss';
```

## License

The components is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
