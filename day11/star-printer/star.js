const maxStars = 10;

// 1. 가로 별 출력
function printStars (count) {
    var stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*";
}
console.log(stars);
}

// 2. 역순 별 출력
function reverseStars(count) {
  for (let i = count; i > 0; i--) {
    var stars = "";

    for (let j = 0; j < i; j++) {
      stars += "*";
    }

    console.log(stars);
  }
}

// 3. 사각형 별 출력
const printSquare = (count) => {
    var stars = "";
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            stars += "*";
        }
            stars += '\n'
    }
    console.log(stars);
}

while (true) {
    let input = prompt("Enter the number of stars (1-10)");
    let count = Number(input);      // 문자열 -> 숫자로 바꿔주기

    if (isNaN(count) || count < 1 || count > maxStars) {
        console.log("Invalid input! Enter a number between 1 and 10.");
        continue;       // 숫자가 아니거나, 1보다 작거나, maxStars(10)보다 크면, 콘솔로그 띄운 뒤 처음부터 다시
    } else {
        
        console.log("=== 1. 가로 별 출력 ===");
        printStars(count);

        console.log("=== 2. 역순 별 출력 ===");
        reverseStars(count);

        console.log("=== 3.사각형 별 출력 ===");
        printSquare(count);

        break;
    }
}