import * as firebase from 'firebase-admin';
import * as serviceAccount from './config/firebase-adminsdk.json';
import * as config from './config/config.json';

export default class App {

    constructor() {
        // Initialize firebase-admin
        const defaultApp = firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount as firebase.ServiceAccount),
            databaseURL: config.firebase.databaseURL,
            storageBucket: config.firebase.storageBucket
        }, serviceAccount.project_id);
        console.info(`Firebase project '${defaultApp.name}' initialized.`);
    }

    async main(): Promise<number> {
        return 0;
    }
}
