
const fs = require('fs');

// 1. Tao tap tin thongtin.txt
const thongTin = `Ho va ten: Nguyen Hoang Hai
Ma sinh vien: CD-CNTT18A12
`;

fs.writeFileSync('thongtin.txt', thongTin);

console.log('Da tao tap tin thongtin.txt');

// 2. Doc va hien thi noi dung ban dau
console.log('\n--- Noi dung ban dau ---');

let data = fs.readFileSync('thongtin.txt', 'utf8');
console.log(data);

// 3. Ghi noi them ten lop bang appendFile()
fs.appendFileSync('thongtin.txt', 'Lop: CD-CNTT18A\n');

console.log('Da ghi noi ten lop vao tap tin');

// 4. Doc lai tap tin sau cap nhat
console.log('\n--- Noi dung sau cap nhat ---');

data = fs.readFileSync('thongtin.txt', 'utf8');
console.log(data);
