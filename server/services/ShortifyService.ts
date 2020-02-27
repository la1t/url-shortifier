import { redisGet, redisSet } from '../redis';
import { getRandomString } from "../utils";

export class ShortifyNotFound extends Error {}

export default class ShortifyService {
    static async getUrlForToken(short: string): Promise<string> {
        const url = await redisGet(short);
        if (url == null) {
            throw new ShortifyNotFound();
        }

        return url;
    }

    static async createShortify(full: string): Promise<string> {
        const token = getRandomString(5);
        await redisSet(token, full);

        return token;
    }
}
