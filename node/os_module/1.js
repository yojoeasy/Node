const os = require('os');

// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);


// Get current user information
const user = os.userInfo();
console.log('User Information:');
console.log(`- Username: ${user.username}`);
console.log(`- User ID: ${user.uid}`);
console.log(`- Group ID: ${user.gid}`);
console.log(`- Home Directory: ${user.homedir}`);

// On Windows, you can also get the user's domain
if (os.platform() === 'win32') {
  console.log(`- Domain: ${user.domain || 'N/A'}`);
}

// Note: user.shell is only available on POSIX platforms
if (user.shell) {
  console.log(`- Default Shell: ${user.shell}`);
}

console.log("Uptime:", os.uptime(), "seconds");

console.log(os.cpus());
console.log("Number of cores:", os.cpus().length);

console.log(os.hostname()); 

console.log(os.userInfo());
/*
{
  uid: -1,
  gid: -1,
  username: 'Yogesh',
  homedir: 'C:\\Users\\Yogesh',
  shell: null
}
*/

console.log(os.homedir());

console.log(os.tmpdir());

console.log(os.endianness()); // LE

console.log(os.networkInterfaces());
/*
{
  'Wi-Fi': [  
    {
      address: '192.168.1.2',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '00:1A:2B:3C:4D:5E',
      internal: false
    }
  ]
}
*/
console.log(os.freemem()); // in bytes
console.log(os.totalmem()); // in bytes 
console.log(os.loadavg()); // [ 0, 0, 0 ] on Windows
console.log(os.cpus());
console.log(os.constants);
console.log(JSON.stringify("line1" + os.EOL + "line2"));
console.log(os.networkInterfaces());
