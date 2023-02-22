# Module 22: State
- [22.1: Introduction to State](#22.1-introduction-to-state)
- [22.2: ](#22.2-)
- [22.3: ](#22.3-)

---
## 22.1: Introduction to State
- Pure and impure functions.

---
### Providers
- You wrap your app with a provider and give it some data.
- How do I set up a React app?

```
<UserContext.Provider value={( currentUser: currentUser )}{...props} />
```

---
### Consumers
- You write code in `ThemeContext.js` and `ThemeComponent.js` files.
- The code below is normally spread across multiple files.
- Pass the context to the app so it’s available to the entire app.
- Pass data down the stack.
- context are like mini libraries you create for yourself.

```
export const ThemeContext = React.createContext()

export default function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(true)
	return {
		<ThemeContext.Provider value={( darkTheme )}>
			{children}
		</ThemeContext.Provider>
	}
}

export default function ThemeComponent() {
	const { darkTheme, toggleTheme } = useContext(ThemeContext)
	return {
		<>
			{darkTheme}
		</>
	}
}

export default function App() {
	return {
		<ThemeProvider>
			<ThemeComponent />
			<div></div>
		</ThemeProvider>
	}
}

```

---
### Reducers
- A reducer is a function that takes a state and takes an action.
- There’s redux and context. They do similar things.

```
import createId from "./createId"

export const reducer = {state, action} => {
	switch (action.type) {
		case "ADD_CAR": {
			const newID = createId(state.cars)
			const newCar = { ...action.payload, id: newID }
			return {
				..state,
				cars: [...state.cars, newCar]
			}
		}
		case "REMOVE_CAR": {
			return {
				...state,
				cars: ...........!
			}
		}
		default: {
			return state
		}
	}
}
```

---
### Actions
- Often done as functions, with a type and payload.
- It’s used elsewhere.

```
export const ADD_CAR = "ADD_CAR"

export function addCar(make, model, isRunning) {
	return {
		type: ADD_CAR,
		payload: {
			make,
			model,
			isRunning,
		},
	}
}
```

```
const action = addCar("Honda", "Fit", false)
state = reducer(state, action)
```

---
### useReducer
- What is this?
- `useReducer` helps with the transition away (or to) reducers?
- People use context now, not reducers.

```
import { TOGGLE_THEME } from "./actions"

export const reducer = (state = initialState, { type }) => {
	switch (type) {
		case TOGGLE_THEME: {
			return {
				...state,
				darkTheme: !state.darkTheme,
			}
		}
		default:
			return: state
	}
}
```

---
## 22.2: MERN Review
- 

### React Hooks Review
- Don’t put a hook in a for loop or some other conditional.
- React will throw an error.
- Hooks should be top-level.

---
### React Router Review
- Use a Link component, instead of a normal link. Otherwise, the entire page will reload (which is what we don’t want).
- React Router gets it all to work.

```
<Router>
	<Routes>
		<Route
			path...
		>
		</Route>
	</Routes>
</Router>
```

---
### Apollo Review
- Resolvers and typeDefs.
- Apollo servers start in the back end with resolvers and typeDefs.
- Then on the front end, you define your queries and mutations.
- You use `useQuery` and `useMutations` on the React side to bring it all together.

```
const { gql } from "@apollo/client"

...
```

---
### JWT Review
- We don’t have access to cookies with React.
- We put the token in the header instead.
- Very complicated.
- The important part is sign token, verify, and sign.
- Not as important to know about setting up GraphQL with JWT. You set it up once, and move on.
- JWT is more important as a whole.

---
### useReducer Review
- Reducer let you do something global?
- Reducers are functions.
- Returns state as a new object.
- It’s a “mega” version of useState.
- What’s dispatch?
- Dispatch is a “fancy setFoo.”

---
## 22.3: 
- 

---
### 
- 

---
### 
- 

---
### 
- 

---
### 
- 

---
### 
- 

---