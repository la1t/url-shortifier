import redis from 'redis';
import { promisify } from "util";
import config from './config';

const client = redis.createClient({url: config.REDIS_URL});

client.on('error', function(error) {
    console.error(error);
});

export const redisGet = promisify(client.get).bind(client);
export const redisSet = promisify(client.set).bind(client);
