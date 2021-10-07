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
</ul>

<br>

<h4> ⚙ 팁 ⚙</h4> 
<ul>
	<li><a href="#set1">초코 설치하기</a></li>
    <li><a href="#set2">푸쉬 메세지 쓸 때</a></li>
</ul>
<br>

</div>
<div id="5">
<h2>10/6 isLoading</h2>
로딩중을 알려주는 표시 
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
axios 설치하기 
<br>
<code>
npm install axios
</code>
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
