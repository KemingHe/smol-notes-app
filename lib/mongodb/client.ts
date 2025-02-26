import 'server-only';

import { MongoClient } from 'mongodb';

import { options, uri } from '@/lib/mongodb/config';

let client: MongoClient;

// In development mode, use a global variable to maintain a single connection
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  // In production mode, create a new client instance
  client = new MongoClient(uri, options);
}

// Use named export for better tree-shaking
export { client };
