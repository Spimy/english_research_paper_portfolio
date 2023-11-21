import database from '$db';

database.connect().then(() => console.log('Database connected.'));
