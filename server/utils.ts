import crypto from 'crypto';


export const getRandomString = (size: number) : string => {
    return crypto.randomBytes(64).toString('hex').slice(0, size);
};
