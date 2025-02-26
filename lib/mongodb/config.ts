import 'server-only';

import type { MongoClientOptions } from 'mongodb';

import { isNonemptyString } from '@/utils/is-nonempty-string';

// Verify MongoDB URI is present in the environment
if (!isNonemptyString(process.env.MONGODB_ATLAS_URI)) {
  throw new Error(
    'MONGODB_ATLAS_URI is not defined or empty in the environment',
  );
}

export const uri: string = process.env.MONGODB_ATLAS_URI as string;
export const options: MongoClientOptions = {};
