let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
    alert('숫자를 좀 더 올려보세요.');
} else if (year > 2015) {
    alert('숫자를 좀 더 내려보세요.');
} else {
    alert('정답입니다!');
}


let accessAllowed;
///////////////////////////////////////////////////////////
let age = prompt('나이를 입력해 주세요.', '');
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);
/*-------------------------------------------------------*/
let accessAllowed = (age > 18) ? true : false;
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
    (age < 18) ? '안녕!' :
    (age < 100) ? '환영합니다!' :
    '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
alert(message);
/*-------------------------------------------------------*/
if (age < 3) {
    message = '아기야 안녕?';
} else if (age < 18) {
    message = '안녕!';
} else if (age < 100) {
    message = '환영합니다!';
} else {
    message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
}
///////////////////////////////////////////////////////////