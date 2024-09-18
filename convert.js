// 섭씨온도 : celsius   화씨온도 : fahrenheit
let fah = parseFloat(prompt("변환할 화씨온도는?"));
let cel;

cel = ((fah - 32) / 1.8).toFixed(1);
alert(`화씨 ${fah}℉는 섭씨 ${cel}℃입니다.`);