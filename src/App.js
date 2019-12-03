import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id':1,
  'image':'https://placeimage.com/64/64/1',
  'name':'권태형',
  'birthday':'980509',
  'gender':'남자',
  'job':"대학생"
},
{
  'id':2,
  'image':'https://placeimage.com/64/64/2',
  'name':'홍길동',
  'birthday':'950413',
  'gender':'남자',
  'job':"회사원"
},
{
  'id':3,
  'image':'https://placeimage.com/64/64/3',
  'name':'권태우',
  'birthday':'011213',
  'gender':'남자',
  'job':"조경사"
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
