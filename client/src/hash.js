import crypto from 'crypto-js';

export function hash(input) {
    return crypto.SHA256(input).toString();
}