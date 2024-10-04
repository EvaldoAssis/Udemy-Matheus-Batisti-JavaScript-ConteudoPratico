const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test('127.01.0.03'));
console.log(validarIP.test('127.192.0.1'));
console.log(validarIP.test('127.192.0.123654')); //a expressão regular utilizada não verifica o tamanho máximo permitido para cada octeto, apenas se há grupos de 1 a 3 dígitos.
console.log(validarIP.test('aaaaaa.shshshshsh'));
console.log(validarIP.test('40000.2352323532.0.01'));
