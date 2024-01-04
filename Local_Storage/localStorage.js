// localStorage is a web storage object in JavaScript that allows you to store key-value pairs in a web browser with no expiration time. 

// The data stored in localStorage persists even after the user closes the browser window or tab. It provides a simple way to store data on the client side.

// -------------------

// setItem(key, value): Adds or updates a key-value pair in the storage.
// getItem(key): Retrieves the value associated with the specified key.

// localStorage.setItem('name', 'John Jacobs');
// localStorage.setItem('movie', 'Animal');


// const locSto = localStorage.getItem('name');
// const locSto1 = localStorage.getItem('movie');

// console.log(locSto,',', locSto1);

// -------------------

// localStorage.setItem('name', 'Enzo Ferrari');
// console.log(localStorage);

// -------------------

// removeItem(key): Removes the key-value pair with the specified key from the storage.

// localStorage.setItem('name', 'Ray Dalio');
// const remItem = localStorage.removeItem('name')

// console.log(remItem);

// --------------------

// clear(): Removes all key-value pairs from the storage.

// localStorage.setItem('name', 'Elon Musk');

// localStorage.clear();

// ---------------------

// key(index): Retrieves the key at the specified index in the storage.

// localStorage.setItem('name', 'Elon Musk');
// localStorage.setItem('book', 'Elon Musk');

// const firstKey = localStorage.key(1);

// console.log(firstKey);

// ---------------------

// removeItem(key): Removes the key-value pair with the specified key from the storage.

// localStorage.setItem('name', 'Jacquine Phoneix')

// localStorage.removeItem('name');

// ---------------------