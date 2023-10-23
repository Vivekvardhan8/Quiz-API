# Quiz-API
This is a quiz challenge in which I have created a **REST API Server + Client** for **Issues** (like that of in Jira or GitHub).
Issues are hard-coded JSON objects with an ID, TITLE, DESCRIPTION
The Client + server will accept and/or send these hardcoded JSON objects according to each API call: Create, Read, Update, Delete.

# REST API Server
The REST API server that return static JSON in this case is local Node.js server running on my machine.
The server supports these 4 standard operations:
- Create: accepts a JSON object & logs the object
- Read: returns a static JSON object
- Update: accepts a JSON object & logs the object
- Delete: logs out the object or id to delete

# REST API Client 
The REST API Client in this case is a command line interface (CLI) Node.js that connects to each of the server endpoints and prints out the response. 
The client too supports the same 4 standard operations:
- Create: sends a JSON obiect to the server
- Read: requests a JSON object & prints it out 
- Update: sends a JSON object to the server
- Delete: requests the server delete an issue
