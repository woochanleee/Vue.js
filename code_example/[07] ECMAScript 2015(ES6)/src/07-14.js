class Person {
  constructor(name, tel, address) {
    this.name = name;
    this.tel = tel;
    this.address = address;

    if (Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }
  static getPersonCount() {
    return Person.count;
  }
  toString() {
    return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
  }
}

var p1 = new Person('이몽룡', '010-222-3332', '경기도');
var p2 = new Person('홍길동', '010-222-3333', '서울');
console.log(p1.toString());
console.log(Person.getPersonCount());

/*
  이전 버전의 자바스크립트(ES5, ES5.1) 까지는 클래스가 제공되지 않았다. 그래서 대
  부분 함수를 이용해 유사 클래스(Pseudo Class) 를 만드는 방법을 사용할 수 밖에 없었다.
  하지만 ES6(ES2015) 에서는 공식적으로 클래스를 지원한다.
*/
