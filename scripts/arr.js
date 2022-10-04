/* 배열 선언 */
// let arr = new Array();
// console.log(arr);

// /*배열 추가*/
// let arr = [];
// console.log(arr);
// arr.push('✔') ;
// arr.push('✔') ;
// console.log(arr);
// /* 배열 추가 삭제 :뒤에서 */
// arr.pop();
// console.log(arr);
// /* 배열 추가 삭제 :앞에서 */


// /* 배열 순회 */
// arr = ['🍕','🍔','🍗','🍜',] ;
// // for(let i = 0; i < arr.length; i++){
// //   console.log(arr)[i]; 
// // }

// for(let i of arr){
//   console.log(i);
// }

// /* 배열의 length 속성*/
// //배열 비우기
// arr.length = 3;           // length를 이용해서 배열 칸수 조절이 가능해짐
// console.log(arr);

// arr = [];
// console.log(arr);




// /* 배열을 문자열로 반환*/
// arr = ['🍕','🍔','🍗','🍜',] ;      // 요소 뒤에 쉼표 가능
// let arrs = String(arr);
// console.log(arrs);


// /* 문자열 split하면 배열반환*/
// arr2 = arr.split(',');
// console.log(arr2);

// /* 배열 정렬 */
// let num = [1,3,5,2,4];
// num.sort();
// console.log(num); 

// /* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
// //3보다 큰수 집합 
// let nf = num.filter((x) => x > 3);
// console.log(nf);


// /* 실습 : 합집합, 교집합, 차집합 */
// let setA = [1,2,3,4,5];
// let setB = [4,5,6,7,8];

// // 얕은 복사 : 주소값 복사
// let setC = setA;    
// console.log(`setC => ${setC}`);

// setA[0] = 100;
// console.log(setC);

// //깊은 복사 : 원본을 두고 복사본 제작
// setA[0] = 10;
// let setD = [...setA];    
// console.log(`setD => ${setD}`);

// setA[0] = 100;
// console.log(setD);

// //-----------------------------------------------
// //합집합
// let union =  [...setA,...setD];
// console.log(union);

// //교집합
// let intersection =  setA.filter((item) => setB.includes(item));
// console.log(intersection);

// //차집합
// let difference =  setA.filter((item) => !setB.includes(item));
// console.log(difference);

/* 배열 섞기*/
let num1 = [1, 2, 3, 4, 5];
num1.sort();
console.log(num1);

for (let i = 0; i < num1.length; i++) {
  let idx1 = Math.floor(Math.random() * 5); // 0~4까지 랜덤수 생성
  let idx2 = Math.floor(Math.random() * 5); // 0~4까지 랜덤수 생성

  if (idx1 == idx2) continue;

  //idx1 위치의 값과 idx2위치의 값을 바꿔치기
  let temp = num1[idx1];
  num1[idx1] = num1[idx2];
  num1[idx2] = temp;

  console.log(`idx1 = ${idx1}, idx2 = ${idx2}`);
  console.log(num1);
}


for (let i = 0; i < num1.length; i++) {
  let idx1 = Math.floor(Math.random() * 5); // 0~4까지 랜덤수 생성
  let idx2 = Math.floor(Math.random() * 5); // 0~4까지 랜덤수 생성

  if (idx1 == idx2) continue;

  //idx1 위치의 값과 idx2위치의 값을 바꿔치기
  let temp = num1[idx1];
  num1[idx1] = num1[idx2];
  num1[idx2] = temp;

  console.log(`idx1 = ${idx1}, idx2 = ${idx2}`);
  console.log(num1);
}
