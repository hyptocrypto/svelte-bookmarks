import App from './App.svelte';
import './main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = new App({
    target: document.body,
    props: {
        name: 'world'
    }
});

export default app;
