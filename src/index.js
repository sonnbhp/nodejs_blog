const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path') //built in nodejs để quản lý thư mục

const route = require('./routes') // tạo function route

const app = express();
const port = 3000;
//Khai báo đường dẫn file tĩnh
app.use(express.static(path.join(__dirname,'public')));


//Cài đặt template của express-handlebars
app.engine('hbs', exphbs.engine({extname:'.hbs'}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources/views')); // set đường dẫn vào thưu mục chứa template
// Local host - hosting là cái server, khi chạy npm start node src/index.js


//Home, search, contact

route(app) // Khởi tạo tuyến đường
//Webserver
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});