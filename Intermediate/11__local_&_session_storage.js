/* LocalStorage
   localStorage remains saved in the browser and persists even when the page is refreshed or when the browser is closed and reopened.
*/

/* SessionStorage
   sessionStorage stores data only for a session. The stored data is only retained as long as the webpage is open.
   If you close the browser tab or window, the stored information disappears, but it survives a page refresh.
*/

// Add item to local or session storage - setItem(key, value)
localStorage.setItem('sport', 'tennis');
sessionStorage.setItem('activity', 'hiking');

// Get item from local or session storage - getItem(key)
localStorage.setItem('username', 'Eve Smith');
console.log(localStorage.getItem('username'));               // Eve Smith 

sessionStorage.setItem('session_active', 'true');
console.log(sessionStorage.getItem('session_active'));       // true

// Remove item from local or session storage - removeItem(key)
localStorage.removeItem('sport');
sessionStorage.removeItem('activity');

// Clear local or session storage - clear() - to remove all key-value pairs stored in the web storage for that specific domain.
localStorage.clear()
sessionStorage.clear()