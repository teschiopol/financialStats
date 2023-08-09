import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.VUE_APP_PB_URL);

const user = async () => {
    // eslint-disable-next-line no-unused-vars
    const authData = await pb.admins.authWithPassword(process.env.VUE_APP_EMAIL, process.env.VUE_APP_TOKEN);
};

user();

export {pb}
