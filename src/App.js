import React from 'react'
import "./App.css"
import Customer from "./component/Customer"

const customer = [
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
]

function App(){
  return(
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이미지</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>성별</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          {
            customer.map(c =>{
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App;