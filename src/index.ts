import App from "./App";

const app = new App();
app.main()
    .then(status => {
        console.info(status, 'Program finished.');
    })
    .catch(error => {
        console.error('Error in main function:', error);
    });
