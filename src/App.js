import React from 'react';
import './App.css';
import Custommer from './components/Customer'

const custommers = [

  {
  'id': 1,
  'image': 'httpL//placeimg.com/64/64/1',
  'name' : '문상훈',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},

{
  'id': 2,
  'image': 'httpL//placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '960815',
  'gender' : '남자',
  'job' : '민간인'
},

{
  'id': 3,
  'image': 'httpL//placeimg.com/64/64/3',
  'name' : '김똘똘',
  'birthday' : '960101',
  'gender' : '남자',
  'job' : '군인'
}
]

function App() {
  return (
    <div> 
      {
        custommers.map(c => {
          return ( 
            <Custommer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
        );
      })
    }
      </div>
  );
}

export default App;
