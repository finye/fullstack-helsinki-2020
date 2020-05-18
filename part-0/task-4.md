### Task 0.4 : new note

note over browser:
Form data from the new note gets
submitted with the POST request
end note  
browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note  
server->browser: Status Code: 302 found, The server responds with a URL redirect request to the browser (to location: /notes)  
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes  
server->browser: HTML code  
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css  
server->browser: main.css  
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js  
server->browser: main.js  
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json  
server->browser: data.json  
note over browser: browser renders the updated notes to display
