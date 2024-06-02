/* Fetch API - fetch(url, {options})
   - url: URL of the resource to fetch
   - options: the most common fetch options are `method`, `headers`, and `body`. This is an optional argument.
            - method: The HTTP method to use when fetching the resource. Default is GET.
            - headers: The headers to be sent with the request. This includes `content type`, `authorization token`, or any other headers required by the server.
            - body: The request body, which can be a string, a blob, or an object. This is used for POST, PUT, and PATCH requests.
*/

// Fetch API (GET Method) Example using .then() :-
/* In the below example, fetch takes the URL of the resource we want to fetch as its argument.
   This fetch request then returns a Promise object, and we use the .then() and .catch() to handle the Promise object.
   The response.json() method is used to parse the response as JSON and returns another Promise that resolves to the actual data.
   The .then() block receives the parsed data, and logs the data to the console.
   And, the .catch() block is used to handle any errors that may occur during the request or parsing of the response
*/
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Fetch API (POST Method) Example using .then() :-
/* In the below example, we created an object `postData` with the data that needs to be sent.
   We passed additional options to the fetch function, as the HTTP method is `POST`.
   The content type header is `application/json`, and the `postData` object is JSON stringified as the `request body`. 
   And, the promises are handled the same way as in the GET request above.
*/
const postData = {
    title: 'John',
    body: 'example',
    userId: 101,
};
  
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => {
        console.log(data);
    })
  .catch(error => {
        console.error('Error:', error);
    });


// Fetch API Example using async/await :-
const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
fetchData();