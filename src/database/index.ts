import { env } from '$env/dynamic/private';
import mongodb from 'mongoose';

export const connect = async () => mongodb.connect(env.DATABASE_URL);
export default { connect };
