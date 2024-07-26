# web3-plugin-subgraph
Subgraph plugin for web3.js

## Introduction

This plugin allows you to interact with subgraphs using web3.js. It provides a simple way to set the subgraph URL and send queries to the subgraph. It is compatible with any subgraph node that supports the GraphQL API.

## Getting Started

### Installation

```bash
npm install web3-plugin-subgraph
```

### Basic Usage

```javascript
const Web3 = require('web3');
const SubgraphPlugin = require('web3-plugin-subgraph');

const web3 = new Web3('https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>');
web3.registerPlugin(new SubgraphPlugin());

// Set subgraph url
web3Context.Subgraph.setURL(SUBGRAPH_URL);
const url = web3Context.Subgraph.getURL();
console.log(url);

// Query subgraph
const result = await web3Context.Subgraph.sendQuery("<GRAPHQL_QUERY_FOR_THE_SUBGRAPH>");
console.log(result.data);
```