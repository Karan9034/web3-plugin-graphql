# web3-plugin-graphql
GraphQL plugin for web3.js

## Introduction

This plugin allows you to interact with GraphQL nodes using web3.js. It provides a simple way to set the GraphQL URL and send queries to the GraphQL node. It is compatible with any node that supports the GraphQL API.

## Getting Started

### Installation

```bash
npm install web3-plugin-graphql
```

### Basic Usage

```javascript
const Web3 = require('web3');
const GraphQLPlugin = require('web3-plugin-graphql');

const web3 = new Web3('https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>');
web3.registerPlugin(new GraphQLPlugin());

// Set GraphQL url
web3Context.GraphQL.setURL(GRAPHQL_URL);
const url = web3Context.GraphQL.getURL();
console.log(url);

// Query GraphQL
const result = await web3Context.GraphQL.sendQuery("<GRAPHQL_QUERY>");
console.log(result.data);
```