# LikeLion_333
1). 함수형 컴포넌트와 클래스형 컴포넌트의 차이 
: 선언 방식, state사용차이, props 사용 방식, 이벤트 핸들링으로 나눌 수 있다.

1. 선언 방식
클래스형 컴포넌트는
import {Component} from 'react';

class App extends Component {
  render() {
    <div/>
  }
}
export default App;

이런 식으로 먼저 class라는 키워드가 필요하고, Component로부터 상속을 받아야한다.
또, render()메소드가 있어야한다.

함수형 컴포넌트는

function App() {
  const name = 'react';
  return <div className = "react">{name}</div>
}

export default App;

이런 식으로 키워드나 상속이 필요없고 함수 형식으로 컴포넌트를 만들 수 있다.


2. state 사용차이

클래스형 컴포넌트는 객체 형식으로 state 초깃값을 설정하고,
this.setstate로 state 값을 변경한다.

함수형 컴포넌트는 useState라는 Hook을 이용해서 state에 접근한다.
함수를 호출하게 되면 배열이 반환되는데 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수이다.
const [value,setValue]=useState
->이런식으로 구조분해할당을 이용한다.


3.props 사용차이

클래스형 컴포넌트의 props는 
const {name,age}=this.props;
이런식으로 값을 불러온다.

함수형 컴포넌트는 this.props 필요없이
function Comp({name,age})
이런 식으로 받아와서 바로 호출할 수 있다.


4.이벤트 핸들링

클래스형 컴포넌트는 화살표 함수로 바로 선언은 가능하지만
요소에 적용시킬 때 
onChange={this.handleChange}
이런 식으로 this를 필요로한다.

함수형 컴포넌트는 함수형식으로 선언해야하지만 요소에 적용시킬 때 this를 필요로 하지 않는다.

함수형 컴포넌트가 더 간편하기도 하고 메모리 사용량이 클래스형 컴포넌트보다 적기 때문에 함수형 컴포넌트 사용을 권장한다.



2)렌더링, 마운트

렌더링은 보통 Props나 State가 변경되었을 때, 부모 컴포넌트가 렌더링되었을 때 렌더링된다.
마운트는 DOM객체가 생성되고 브라우저에 나타나는 것을 말한다.
하지만 렌더링과 마운트는 다르다. 맨 처음 컴포넌트가 렌더링 될 때는 마운트 되지만,
state나 Props가 변경되어 렌더링 될 때는 마운트 되지 않는다.
따라서 해당 변화는 shouldComponentUpdate()함수로 감지해서 작업해야 한다.

