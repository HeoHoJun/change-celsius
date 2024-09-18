// 섭씨온도 : celsius   화씨온도 : fahrenheit
let fah = parseFloat(prompt("변환할 화씨온도는?"));
let cel = ((fah - 32) / 1.8).toFixed(1);  // toFixed 함수를 통해 소숫점 자리 수 고정해줌
// cel = ((fah - 32) / 1.8); 소수점 이하 자리가 너무 많이 나옴
alert(`화씨 ${fah}℉는 섭씨 ${cel}℃입니다.`);