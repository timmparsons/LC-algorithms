
/*Defanging an IP Address
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".*/

/**
 * @param {string} address
 * @return {string}
 */
function defangIPaddr (address) {
  const newAddress = address.split(".");  
  const latestAddrr = newAddress.join("[.]") 
  return latestAddrr;
};

module.exports = defangIPaddr;