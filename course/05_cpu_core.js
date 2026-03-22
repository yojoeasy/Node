const os = require("os");

const cores = os.cpus();

// console.log("Total Logical Cores:", cores.length);

console.log("cpus:", os.cpus().length);
console.log("available:", os.availableParallelism());

console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

console.log(os.platform()); // win32, linux
console.log(os.arch());     // x64, arm
console.log(os.hostname()); // system name

console.log(os.userInfo()); // user info

console.log(os.uptime()); // uptime in seconds

console.log(os.homedir()); // home directory

console.log(os.tmpdir()); // temporary directory    

console.log(os.networkInterfaces()); // network interfaces

console.log(os.EOL); // end of line

console.log(os.loadavg()); // load average

console.log(os.cpus()[0].model); // cpu model
console.log(os.cpus()[0].speed); // cpu speed
console.log(os.cpus()[0].times); // cpu times

// console.log(os.cpus()[0].times.user); // cpu user time
// console.log(os.cpus()[0].times.nice); // cpu nice time
// console.log(os.cpus()[0].times.sys); // cpu sys time
// console.log(os.cpus()[0].times.idle); // cpu idle time
// console.log(os.cpus()[0].times.irq); // cpu irq time    

console.log("Process ID (PID):", process.pid);
console.log("Parent Process ID (PPID):", process.ppid);

