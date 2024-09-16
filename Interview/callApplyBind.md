In JavaScript, `call()`, `apply()`, and `bind()` are methods used to manipulate the value of `this` inside a function. They allow you to control which object is treated as `this` when invoking a function. Here's an explanation of each with examples:

### 1. **`call()`**
The `call()` method calls a function with a given `this` value and arguments provided one by one.

#### Syntax:
```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

- `thisArg`: The object to use as `this`.
- `arg1, arg2, ...`: Arguments passed to the function.

#### Example:
```javascript
const person = {
  name: 'Alice',
};

function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}

// Using call() to set 'this' to the 'person' object
greet.call(person, 'Hello', '!');  // Output: "Hello Alice!"
```

In this case, the function `greet` is called with `this` set to the `person` object, and the arguments `'Hello'` and `'!'` are passed separately.

### 2. **`apply()`**
The `apply()` method is similar to `call()`, but it takes the arguments as an array instead of passing them individually.

#### Syntax:
```javascript
functionName.apply(thisArg, [arg1, arg2, ...])
```

- `thisArg`: The object to use as `this`.
- `[arg1, arg2, ...]`: An array of arguments passed to the function.

#### Example:
```javascript
const person = {
  name: 'Bob',
};

function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}

// Using apply() to set 'this' to the 'person' object and pass arguments as an array
greet.apply(person, ['Hi', '?']);  // Output: "Hi Bob?"
```

Here, `apply()` sets `this` to the `person` object and passes the arguments as an array.

### 3. **`bind()`**
The `bind()` method creates a new function that, when invoked, has its `this` value permanently set to the provided object. Unlike `call()` and `apply()`, `bind()` doesn’t immediately invoke the function. Instead, it returns a new function that can be called later.

#### Syntax:
```javascript
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
```

- `thisArg`: The object to use as `this`.
- `arg1, arg2, ...`: Optional arguments that will be prepended when the new function is invoked.

#### Example:
```javascript
const person = {
  name: 'Charlie',
};

function greet(greeting, punctuation) {
  console.log(greeting + ' ' + this.name + punctuation);
}

// Using bind() to set 'this' to the 'person' object
const greetPerson = greet.bind(person, 'Good morning');

// Calling the new function later
greetPerson('!');  // Output: "Good morning Charlie!"
```

In this case, `bind()` creates a new function (`greetPerson`) where `this` is permanently bound to the `person` object. You can call `greetPerson()` anytime, and the `this` value will always be `person`.

### Summary:

- **`call()`**: Immediately invokes the function with `this` and arguments provided one by one.
- **`apply()`**: Immediately invokes the function with `this`, but arguments are provided as an array.
- **`bind()`**: Returns a new function with `this` permanently bound to a specific object, but doesn't invoke it immediately.