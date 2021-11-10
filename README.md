# 김미래 202030404 
2학년 2학기의 웹콘텐츠 프로그래밍 수업때 제작한 
Movie App 2021 앱입니다.  

<br>
<h2 id=index>Index</h2>
<ul>
	<li><a href="#1">9/1 리액트 기본 세팅</a></li>
  <li><a href="#2">9/8 클론 코딩 시작하기</a></li>
  <li><a href="#3">9/15 props</a></li>
  <li><a href="#4">9/29 prop-types</a></li>
  <li><a href="#5">10/6 isLoading</a></li>
  <li><a href="#6">10/13 Movie 컴포넌트</a></li>
  <li><a href="#7">10/27 영화앱 다듬기</a></li>
  <li><a href="#8">11/3 영화앱 완성하기 </a></li>
  <li><a href="#9">11/10 배포 </a></li>
</ul>

<br>

<h4> ⚙ 팁 ⚙</h4> 
<ul>
	<li><a href="#set1">초코 설치하기</a></li>
    <li><a href="#set2">푸쉬 메세지 쓸 때</a></li>
</ul>
<br>

<div id="9">
**리액트 특징**

- UI개발 적합
- 컴포넌트 로직은 js로 작성
- 캡슐화된 컴포넌트 → 재사용 좋음
- dom과 별개 상태 관리 가능
- 기술 스택의 나머지 부분엔 관여X
- 기존 코드와 별개로 개발 가능
- 리엑트 네이티브 이용 시 모바일 앱 개발 가능

**리액트 CDN으로 사용하기**

- CDN: Content Delivery NetWork
- CORS: 링크만 html에 갖다놓으면 쓸 수 있게 하는 메커니즘임.
- Babel: 이전 버전 코드 호환 컴파일러

cdn으로 할 때 

- 리액트 넣고
- cdn 링크넣고
- 바벨 넣고
- <script type="text/babel"> 적어야함

```html
<body>
    <script type="text/babel">
        class HelloMessage extends React.Component{
            render(){
                return(
                    <div>
                        hello {this.props.name}
                    </div>
                )
            }
        } 
        ReactDOM.render(
            <HelloMessage name="Taylor" />,
            document.getElementById('hello-example')
        )
    </script>
</body>
```
</div>
<div id="8">
<h2>11/3 영화앱 완성하기</h2>
- 네비게이션 컴포넌트 만들기

```jsx
function Navigation() {
    return(
        <div className="nav">
            <Link to="/"> HOME </Link>
            <Link to="/about"> About </Link>
        </div>
    );
}
```

- 디테일 컴포넌트 만들기

```jsx
import React from "react";

function Detail(props) {
    console.log(props);
    return <span>hello</span>
}

export default Detail;
```

- 리다이렉트 기능 만들기

```jsx
class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;

        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const {location}= this.props;
        if(location.state){
            return <span> {location.state.title} </span>
        } else {
            return null;
        }
    }
}
```

</div>
<div id="7">
<h2>10/27 영화앱 다듬기</h2>
- css 수정하기 → App.css랑 Movie.css

```jsx
box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
0 -12px 36px -8px rgba(0, 0, 0, 0.025);
```

박스 그림자 효과 css 코드!

- 말 줄임 효과

```jsx
<p class="move__summary">{summary.slice(0,180)}...</p>
```

0부터 시작해서 180자 전까지만 보여진다.

- 타이틀 변경하기

```html
<title>Movie App</title>
```

- 라우터 설치하기

```html
npm install react-router-d install react-router-dom
```

- Route는 2가지 props 전달
    1. url을 위한 path props
    2. url 에 맞는 컴포넌트를 불러 주기 위한 component props
    
- 문제점: 경로안에 있는 내용이 화면에 모두 보여짐
    
    해결 방법: exact props 추가하기
    
    ```html
    exact={true}
    ```
    

- npm install re install react-router-dom 시 오류 발생

```jsx
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!
npm ERR! Maximum call stack size exceeded

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\82102\AppData\Roaming\npm-cache\_logs\2021-10-27T07_07_17_243Z-debug.log
```




</div>
<div id="6">
<h2>10/13 Movie 컴포넌트</h2>
Movie.js에 적은 컴포넌트에 실질적인 값을 app.js에서 전달합니다.

```jsx
function Movie({id, title, year, summary, poster}){
    return (
        <div class="movie__data">
            <h3 class="move__title">{title}</h3>
            <h5 class="move__year">{year}</h5>
            <p class="move__summary">{summary}</p>
        </div>
    )
}
```
위와 같은 컴포넌트는 아래 컴포넌트의 값을 가져옵니다.
(movies.map은 영화api에서 필요한 키값을 가져옵니다.)

```jsx
{ movies.map((movie) => {
return (
<Movi
			key={movie.id}
			id={movie.id}
			year={movie.year}
			title={movie.title}
			summary={movie.summary}
			poster={movie.poster}
			/>
		);
})}
```

</div>
<div id="5">
<h2>10/6 isLoading</h2>
<h3>로딩중을 알려주는 표시</h3>
<br>
<code>
render() {
    const { isLoading } = this.state
    return (
      <div>
        { isLoading ? 'Loading...' : '영화데이터출력'}
      </div>
      )
    }
</code>
<br>
axios 설치하기 
<br>
<code>
npm install axios
</code>
<br>
axios를 이용하여 api를 이용할 수 있다.



</div>
<div id="4">
  <h2>9/29 prop-types</h2>
  1. 프로토타입을 설치합니다.<br>
  <code>npm install prop-types</code>
  <br>
  설피 후 package.json에서 prop-types의 
  키값이 추가된 것을 확인할 수 있어요

  2. 프로토타입을 적습니다.<br>
  <code> 
  Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
  </code>
   <br>
   딕셔너리에 넣어둔 평점 부분이 number타입으로 보여져요
   ( PropTypes은 정적 데이터를 관리! 동적은 state로!)

------------**지금까지 연습! 04-app으로 바꾸고 새파일로 씁니다**-----

  1. 버튼을 이용해서 숫자 증감하기<br>
  <code>
  <button onClick={this.add}>add</button>
  <button onClick={this.minus}>minus</button>
  </code>
  <br>
  버튼을 만들어주고 onClik을 만들어요
  <br>
  <code>
   add = () => {
   this.setState({count : this.state.count +1});
  }

  minus = () => {
    this.setState({count : this.state.count -1});
  }
  </code>
  <br>

  2. componentDidMount, componentDidUpdate<br>
  <code>
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }</code>
  <br>
  

</div>
<div id="3">
  <h2> 9/15 props </h2>

  <h3> 1. 딕셔너리 </h3>
  딕셔너리는 아래와 같은 형식으로 작성해야 해요 <br>
  <code>
  const foodLike = [
  {
  id : 1,
  name : '냉면',
  }
  </code>
  <br>
  <h3> 2. Map 함수 </h3>
  map 함수를 이용하면 딕셔너리 안에서 정보를 찾을 수 있어요.
  이때 dish의 이름으로 찾을 거에요 <br>
  <code>
  foodLike.map (dish =>(
      <Food key={dish.id} name={dish.name} picture={dish.img} alt={dish.name}/>))
  </code>
  <br>
  <h3> 3. 함수 인자에서 구조 분해 할당하기 (76p) </h3>
  함수 인자에서 바로 구조 분해를 할당했어요<br>
  <code>
  function Food({name, picture}){

    return(
      <div>

        <h4>난 {name}이 먹고 싶어</h4>
        <img  src = {picture} />

      </div>
    );
  }
  </code>
  <br>
  <h3>4. 함수를 만들어서 App() 을 깨끗하게 만들고 싶다면?</h3>
  <br>
  <code>
      foodLike.map (foodrender)
  </code>
  App에는 위와 같이 함수 이름만 써주고, 
  <br>
  <code>
    function foodrender(dish){
      return <Food name={dish.name} picture={dish.img} alt={dish.name}/>;
    }
  </code>
  <br>
  아래에는 foodrender 함수를 만들면 깨끗하게 정리할 수 있어
  


</div>
<div id="2">
  <h2> 9/8 클론 코딩 시작하기 </h2>

	
</div>
<div id="1">
  <h3> 9/1 리액트 기본 세팅 </h3>
	1. 리액트 시작 → <code> npm start</code>
	2. 리액트 종료 → <code>컨트롤 C </code>
	
</div>

<br>

<div id="set2">
    <h3>푸쉬 메세지 쓸 때</h3>
    (예시)
Edit package.json

script의 test, eject 삭제 

-> 동사원형으로 작업을 정의한다. 
    한 줄로 짧게 적는다.  
    그 밑은 스크립트로 들어가므로 길게 적어도 된다. 
</div>

<br>

<div id="set1"> 
	<h2>Chocolatey 설치법</h2>

chocolatey란, 윈도우용 패키지 매니저임! 

1. 아래 코드 복사하기 

`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

2. 윈도우 powerShell 관리자모드에 붙혀넣기 
<img width="172" alt="파워셸" src="https://user-images.githubusercontent.com/70610515/131619409-15120ecf-fb54-4f41-b208-44403fa866c8.PNG">
</div>
