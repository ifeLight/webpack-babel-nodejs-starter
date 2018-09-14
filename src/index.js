import fs from 'fs';

fs.readdirSync(__dirname, (err, data) => {
    if (err) {
        console.error("Error with your file directory: Test");
    } else {
        console.log("Webpack Babel Starter for Node.js");
    }
})