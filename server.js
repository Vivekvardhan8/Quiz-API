const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

const issues = [
  { id: 1, title: 'Issue 1', description: 'Description for Issue 1' },
  { id: 2, title: 'Issue 2', description: 'Description for Issue 2' },
];

// GET all issues
app.get('/issues', (req, res) => {
  res.json(issues);
  console.log('Get all issues: Success' + issues);
});

// GET a specific issue
app.get('/issues/:issueId', (req, res) => {
  const issueId = parseInt(req.params.issueId);
  const issue = issues.find((issue) => issue.id === issueId);
  if (issue) {
    res.json(issue);
    console.log('Getting an issues: Success' + issue);
  } else {
    res.status(404).send('Issue not found');
    console.log('Getting an issue: failed');
  }
});

// POST (create) a new issue
app.post('/issues', (req, res) => {
  const { title, description } = req.body;
  const newIssue = { id: issues.length + 1, title, description };
  issues.push(newIssue);
  res.status(201).json(newIssue);
  console.log('Creating an issue: Success'+ newIssue);
});

// PUT (update) an issue
app.put('/issues/:issueId', (req, res) => {
  const issueId = parseInt(req.params.issueId);
  const issue = issues.find((issue) => issue.id === issueId);
  if (issue) {
    issue.title = req.body.title;
    issue.description = req.body.description;
    res.json(issue);
    console.log('Updating an issue: Success'+ issue);
  } else {
    res.status(404).send('Issue not found');
    console.log('Updating an issue: failed');
  }
});

// DELETE an issue
app.delete('/issues/:issueId', (req, res) => {
  const issueId = parseInt(req.params.issueId);
  const issueIndex = issues.findIndex((issue) => issue.id === issueId);
  if (issueIndex !== -1) {
    issues.splice(issueIndex, 1);
    res.status(204).send();
    console.log('Deleting an issue: success'+ issueIndex);
  } else {
    res.status(404).send('Issue not found');
    console.log('Deleting an issue: failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});