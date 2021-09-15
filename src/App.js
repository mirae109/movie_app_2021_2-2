import React from 'react';
import { render } from 'react-dom';

//map 함수를 이용해서 딕셔너리 안에서 정보를 찾는다.
//App은 전체 컴포넌트를 내포한다. 기본 화면  
function App() {
  return (
      <div>
        {
          foodLike.map (dish =>(
            <Food key={dish.id} name={dish.name} picture={dish.img} alt={dish.name}/>))
        
            // foodLike.map (foodrender)
        
        }
      </div>
  ); 
}
//foodLike 딕셔너리 안에서 필요한 정보를 찾을 건데,
// dish의 이름으로 찾을 거니까 화살표함수를 dish로 설정해 

//딕셔너리. 정보를 저장
const foodLike = [
  {
  id : 1,
  name : '냉면',
  img : 'https://blog.kakaocdn.net/dn/CDBX3/btqv7D2OlTK/q8do1uNXGHP6piyJmO8M8K/img.jpg',
  rating: 5
},
  {
    id : 2,
    name : '치킨',
    img : 'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2016/03/29/c_km601/911811_540.jpg',
    rating: 4.9
  }
];

// function foodrender(dish){
//   return <Food name={dish.name} picture={dish.img} alt={dish.name}/>;
// }

//Food 함수
//name, picture는 props이다. 
function Food({name, picture}){

  return(
    <div>

      <h4>난 {name}이 먹고 싶어</h4>
      <img  src = {picture} />

    </div>
  );
}



export default App;
