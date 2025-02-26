import 'server-only';

import { ChatAnthropic } from '@langchain/anthropic';
import { StructuredOutputParser } from '@langchain/core/output_parsers';
import type { Runnable } from '@langchain/core/runnables';
import { MongoDBAtlasVectorSearch } from '@langchain/mongodb';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import type { MongoClient } from 'mongodb';
import { z } from 'zod';

import {
  ANTHROPIC_API_KEY,
  ANTHROPIC_LITE_MODEL,
  ANTHROPIC_REGULAR_MODEL,
  OPENAI_API_KEY,
  OPENAI_LITE_MODEL,
  OPENAI_REGULAR_MODEL,
} from '@/lib/langchain/config';
import { client as mongodbClient } from '@/lib/mongodb/client';

const client: MongoClient = mongodbClient;

const openai_lite_model: Runnable = new ChatOpenAI({
  apiKey: OPENAI_API_KEY,
  model: OPENAI_LITE_MODEL,
  temperature: 0,
});

const openai_regular_model: Runnable = new ChatOpenAI({
  apiKey: OPENAI_API_KEY,
  model: OPENAI_REGULAR_MODEL,
  temperature: 0,
});

const openai_embeddings = new OpenAIEmbeddings({
  apiKey: OPENAI_API_KEY,
});

const anthropic_lite_model: Runnable = new ChatAnthropic({
  apiKey: ANTHROPIC_API_KEY,
  model: ANTHROPIC_LITE_MODEL,
});

const anthropic_regular_model: Runnable = new ChatAnthropic({
  apiKey: ANTHROPIC_API_KEY,
  model: ANTHROPIC_REGULAR_MODEL,
});
