const {spawn} = require('child_process')

// const childPython = spawn('python',['--version']);
// const childPython = spawn('python',['PyScript.py']);
// const childPython = spawn('python',['PyScript.py','NodeJS']);

obj = {testKey : 'Test Value'}
const childPython = spawn('python',['PyScript.py',JSON.stringify(obj)]);


childPython.stdout.on('data',(data) => {
    console.log(`stdout : ${data}`);
});

childPython.stderr.on('data',(data) => {
    console.log(`stderr : ${data}`);
});

childPython.on('close',(code) => {
    console.log(`child process exited with code : ${code}`);
});