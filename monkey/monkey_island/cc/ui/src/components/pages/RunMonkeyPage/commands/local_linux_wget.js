import {OS_TYPES} from '../utils/OsTypes';


export default function generateLocalLinuxWget(ip, osType, username) {
    let bitText = osType === OS_TYPES.LINUX_32 ? '32' : '64';
    let command = `wget --no-check-certificate https://${ip}:5000/api/monkey/download/`
      + `monkey-linux-${bitText}; `
      + `chmod +x monkey-linux-${bitText}; `
      + `./monkey-linux-${bitText} m0nk3y -s ${ip}:5000`;
    if (username != '')
      command = `su - ${username} -c "${command}"`;
    return command;
  }
