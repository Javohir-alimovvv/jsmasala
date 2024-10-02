// 1#

{
    function rev(number) {
        return number.toString().split('').reverse().join('');
    }
    console.log(rev(123));
}


// 2#

// {
//     let newArr = ["text", "world", "laptop"]
//     let newObj = []
//     for (let obj in newArr) {
//         console.log(obj);
//         newObj[newArr[obj]] = newArr[obj].length
//     }
//     console.log(newObj);
// }



// 3#

// {
//     function minMaxWord(box) {
//         let words = box.split(" ");
//         let minWord = words.reduce((min, word) => word.length < min.length ? word : min, words[0]);
//         let maxWord = words.reduce((max, word) => word.length > max.length ? word : max, words[0]);

//         return { minWord: minWord, maxWord: maxWord };
//     }
//     let box = "Men dasturlash kursida o’qiyman";
//     let result = minMaxWord(box);
//     console.log(result);
// }



// 4#

// {
//     function getLevel(n) {
//         let result = [];
//         for (let i = 1; i <= n; i++) {
//             result.push(Math.pow(2, i)); // 2 ning i-darajasini hisoblaymiz
//         }
//         return result;
//     }

//     console.log(getLevel(4)); // [2, 4, 8, 16]
//     console.log(getLevel(5)); // [2, 4, 8, 16, 32]
// }


// 5#

// {
//     function findMinWord(sentence) {
//         let words = sentence.split(" ");
//         let minWord = words.reduce((min, word) => word.length < min.length ? word : min, words[0]);
//         return minWord;
//     }

//     let sentence = "Men dasturlash kursida o’qiyman";
//     console.log(findMinWord(sentence));
// }


// 6#

// {
//     const obj = { a: 2, b: 3, c: 4 }

//     for (let i in obj) {
//         let n = 5
//         console.log(obj[i] * n);
//     }
// }

// 7#

// {
//     function countNumbers(sentence) {
//         let words = sentence.split(" ");
//         let count = 0;
//         words.forEach(word => {
//             if (!isNaN(word)) {
//                 count++;
//             }
//         });
//         return count;
//     }
//     let sentence = "Men 2 ta kitob sotib oldim va 3 ta sovg’a oldim";
//     console.log(countNumbers(sentence));
// }


// 8#

// {
//     const sumOf = (num) => {
//         return num.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
//     }
//     let number = 1234;
//     console.log(`Berilgan sonning raqamlari yig'indisi: ${sumOf(number)}`);

// }


// 9#

// {
//     function harf(str) {
//         let count = 0
//         for (let box of String(str)) {
//             if (box === 'a') {
//                 count++
//             }
//         }
//         console.log(`${str}da ${count} ta a harfi bor`);
//     }
//     harf("Salom dunyo");
//     harf("Hello World");
// }


// 10#

// {
//     function findPowerOfTwo(n) {
//         let k = 0;
//         while (n > 1) {
//             if (n % 2 !== 0) {
//                 return -1;
//             }
//             n = n / 2;
//             k++;
//         }
//         return k;
//     }

//     let n = 8;
//     let k = findPowerOfTwo(n);
//     if (k !== -1) {
//         console.log(`${n} soni 2 ning ${k}-darajasi.`);
//     } else {
//         console.log(`${n} soni 2 ning darajasi emas.`);
//     }
// }


