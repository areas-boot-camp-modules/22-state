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
## 22.2: 
- 

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