import 'server-only';

import { env } from '@keminghe/tsutils';
import type { MongoClientOptions } from 'mongodb';

export const uri: string = env('MONGODB_ATLAS_URI');
export const options: MongoClientOptions = {};
