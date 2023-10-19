const axios = require('axios');

const baseUrl = 'http://localhost:8080';

// GET all issues
axios.get(`${baseUrl}/issues`)
  .then((response) => {
    console.log('All Issues:');
    console.log(response.data);
  });

// GET a specific issue
const issueId = 1;
axios.get(`${baseUrl}/issues/${issueId}`)
  .then((response) => {
    console.log(`\nIssue ${issueId}:`);
    console.log(response.data);
  });

// POST (create) a new issue
const newIssue = { title: 'New Issue', description: 'Description for the new issue' };
axios.post(`${baseUrl}/issues`, newIssue)
  .then((response) => {
    console.log('\nNew Issue:');
    console.log(response.data);
  });

// PUT (update) an issue
const updateData = { title: 'Updated Issue', description: 'Updated description' };
axios.put(`${baseUrl}/issues/${issueId}`, updateData)
  .then((response) => {
    console.log('\nUpdated Issue:');
    console.log(response.data);
  });

// DELETE an issue
axios.delete(`${baseUrl}/issues/${issueId}`)
  .then(() => {
    console.log(`\nDeleted Issue ${issueId}.`);
  })
  .catch((error) => {
    console.log(`\nError: ${error.response.data}`);
  });