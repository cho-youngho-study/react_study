const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customer', (req, res) => {
    res.send([
        {
            "id":1,
            "image":"https://placeimg.com/64/64/any",
            "name" : "홍길동",
            "birthday":"111111",
            "gender":"남자",
            "job":"대학생"
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '나동빈',
            'birthday': '960508',
            'gender': '남자',
            'job': '프로그래머'
            },
            {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이순신',
            'birthday': '961127',
            'gender': '남자',
            'job': '디자이너'
            }
        ])
});

module.exports = app;