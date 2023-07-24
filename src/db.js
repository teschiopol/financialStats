import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const user = async () => {
    // eslint-disable-next-line no-unused-vars
    const authData = await pb.admins.authWithPassword(process.env.VUE_APP_EMAIL, process.env.VUE_APP_TOKEN);
};

user();

export {pb}
