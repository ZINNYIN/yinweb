requirejs.config({
    "baseUrl": "javascript/lib",
    "paths": {
      "app": "../app"
    },
    "shim": {
        // "jquery.menumav": ["jquery"]
        // "jquery.beta": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);