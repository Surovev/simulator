// const list = [1, 3, 4, 5, 7, 10];

const { log } = require("console");

// function binarySearch(list, element) {
//     let start = 0;
//     let end = list.length -1;

//     while (start <= end) {
//         center = Math.floor((start + end) / 2);
//         if (list[center] === element) return center;
//         if (element < list[center]) end = center - 1;
//         else start = center + 1;
//     };

//     return -1;
// };
// console.log(binarySearch(list, 10))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const palindrome = (str) => {
//     let front = str.length - 1;

//     for (let back = 0; front >= back; back++) {
//         if (str[back].toLowerCase() !== str[front].toLowerCase()) return false;
//         front--;
//     }; return true;
// };

// https://playcode.io/880094

// console.log(palindrome('racecar'));
// console.log(palindrome('table'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const fizzBuzz = num => {
//     let result = [0];

//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0)
//             result.push('fizzbuzz');
//         else if (i % 3 !== 0 && i % 5 === 0)
//             result.push('buzz');
//         else if (i % 3 === 0 && i % 5 !== 0)
//             result.push('fizz');
//         else
//             result.push(i);
//     }
//     return result
// }

// console.log(fizzBuzz(6));
// console.log(fizzBuzz(16));

///////////////////////////////////////////////////////////////////////////////////////////////////////

// const list = [1, 5, 3, 7, 17, 10];


// function bubbleSort(arr) {
//     let swapped = true;

//     while (swapped) {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1);
//                 swapped = true;
//             }
//         }
//     }

//     return arr;
// }

// function swap(arr, i, j) {
//     const tmp = arr[i];

//     arr[i] = arr[j];
//     arr[j] = tmp;
// }

// console.log(bubbleSort(list));

// https://playcode.io/874461

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const list = [1, 5, 3, 7, 17, 10];


// function findInsertionIndex(arr, i) {
// let j = i
// 	for (let n = i; n >= 0; n--) {
// 		if (arr[n] > arr[i]) {
// 			j = n;
// 		}
// 	}
// 	return j;
// }

// function shiftElements(arr, insertionIndex, i) {
// 	const value = arr[i];
// 	for (i; i > insertionIndex; i--) {
//         arr[i] = arr[i -1]
// 	}

// 	arr[insertionIndex] = value;
//     return arr;
// }

// function insertionSort(arr) {
// 	for (let i = 0; i < arr.length; i++ ) {
// 		let insertionIndex = findInsertionIndex(arr, i);
// 		shiftElements(arr, insertionIndex, i);
// 	}
// 	return arr;
// }

//  console.log(insertionSort(list));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const list = [1, 5, [3, {a: 7}], 17, 10];


// const flatten = (items) => {
// 	let result = [];

// 	items.forEach((item) => {
// 	  if(Array.isArray(item)) {
// 		item.forEach((element) => {
// 			result.push(element);
// 		})

// 		result.concat(item)
// 	  } else {

// 		result.push(item)
// 	  }
//   })
// 	console.log(result)
// 	return result;
//   };

// console.log(flatten(list));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function findEqualElements(arr1, arr2) {

// const result = [];

// let f = 0;
// let s = 0;

// while (f < arr1.length && s < arr2.length) {
// 	if (arr1[f] === arr2[s]) {
// 		result.push(arr1[f]);
// 		f++;
// 		s++;
// 	} else if (arr1[f] < arr2[s]) {
// 		f++;
// 	} else {
// 		s++;
// 	}
// }

// return result;
// }


// Примеры
// console.log(findEqualElements([1, 2, 3], [2])); // => [2]
// console.log(findEqualElements([2], [1, 2, 3])); // => [2]
// console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])); // => [2, 2]
// console.log(findEqualElements([2, 2, 2, 2], [1, 2, 2, 3])); // => [2, 2]

/////////////////////////////////////////////////////////////////////////

// function intersection(user1, user2) {
//     const result = [];
//     let i1 = 0;
//     let i2 = 0;

//     while (i1 < user1.length && i2 < user2.length) {
//         const leftOffset = Math.max(user1[i1][0], user2[i2][0]);
//         const rightOffset = Math.min(user1[i1][1], user2[i2][1]);

//         if (rightOffset > leftOffset) {
//             result.push([leftOffset, rightOffset]);
//         }

//         user1[i1][1] < user2[i2][1] ? i1++ : i2++;
//     }

//     return result;
// }
// console.log(intersection(
// 	[[8, 12], [17, 22]],
// 	[[5, 11], [14, 18], [20, 23]]
// ));
//  // [[8, 11], [17, 18], [20, 22]]

// intersection(
// 	[[9, 15], [18, 21]],
// 	[[10, 14], [21, 22]]
// ) // [[10, 14]]

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function reverse(head) {

// 	if (head === null) return;

// 	let currentNode = head;
// 	let prevNode = null;
// 	let nextNode = null;

// 	while (currentNode) {
// 		nextNode = currentNode.next;
// 		currentNode.next = prevNode;
// 		prevNode = currentNode;
// 		currentNode = nextNode;
// 		nextNode = null;
// 	}
// 	head = prevNode;

// 	return head;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Stack {
// 	constructor() {
// 		this.size = 0;
// 		this.head = null;
// 		this.tail = null;
// 	}

// 	// Кладёт элемент на стек.
// 	// Возвращает новый размер стека.
// 	push(value) {
// 		const node = { value, next: null, prev: null };
// 		if (this.size === 0) {
// 			this.head = this.tail;
// 			this.tall = node;
// 		} else {
// 			node.prev = this.tail;
// 			this.tail.next = node;
// 			this.tail = node;
// 		}


// 		return this.size++;
// 	}

// 	// Убирает элемент со стека.
// 	// Если стек пустой, кидает ошибку.
// 	// Возвращает удалённый элемент.
// 	pop() {
// 		if (this.size === 0) {
// 			throw new Error("Многовато");
// 		}
// 		const ret = this.tail;
// 		this.tail = this.tail.prev;
// 		this.size--;
// 		return ret;
// 	}

// 	// Возвращает верхний элемент стека без его удаления.
// 	peek() {
// 		return this.tail;
// 	}

// 	// Если стек пуст, возвращает true. В противном случае –– false.
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// }


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Queue {
// 	constructor() {
// 		this.size = 0;
// 		this.head = null;
// 		this.tail = null;
// 	}

// 	// Ставит элемент в очередь.
// 	// Возвращает новый размер очереди.
// 	enqueue(value) {
// 		const node = { value, next: null, prev: null };
// 		if (this.size === 0) {
// 			this.tail = this.head = node;

// 		} else {
// 			node.prev = this.tail;
// 			this.tail.next = node;
// 			this.tail = node;
// 		}


// 		return this.size++;
// 	}

// 	// Убирает элемент из очереди.
// 	// Если очередь пустая, кидает ошибку.
// 	// Возвращает удалённый элемент.
// 	dequeue() {
// 		if (this.size === 0) {
// 			throw new Error("ошибочка вышла");
// 		}
// 		const ret = this.head;
// 		this.head = this.head.prev;
// 		this.size--;
// 		return ret;
// 	}

// 	// Возвращает элемент в начале очереди.
// 	peek() {
// 		return this.head;
// 	}

// 	// Если очередь пустая, возвращает true. В противном случае –– false.
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function rle(str) {

// 	const regex = new RegExp("^[A-Z]+$");

// 	if (str.length > 0 && !regex.test(str)) {
// 		throw new Error('string is not valid');
// 	}
// 	let result = str[0] || '';

// 	let n = 1;


// 	for (let i = 1; i < str.length; i++) {

// 		if (result[result.length - 1] === str[i]) {
// 			n++;
// 		} 
// 		if (result[result.length - 1] !== str[i]) {
// 			if (n > 1) {
// 				result += n;
// 				n = 1;
// 			}
// 			result += str[i];
// 		}
// 		if (i === str.length - 1 && n > 1) {
// 			result += n;
// 		}
// 	}
// 	return result;
// }

// console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBfBBBBBBBBBBBBB'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function compress(list) {
//     return bubbleSort(list);
// }


// function bubbleSort(arr) {
//     let swapped = true;

//     while (swapped) {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1);
//                 swapped = true;
//             }
//         }
//     }

//     return arr;
// }

// function swap(arr, i, j) {
//     const tmp = arr[i];

//     arr[i] = arr[j];
//     arr[j] = tmp;
// }


// console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const { createInterface } = require("readline");

// function solveTestCase(test) {
//   const [P, V] = test[0].split(' ').map(Number);
//   const [Q, M] = test[1].split(' ').map(Number);

//   // ТВОЙ КОД

//   // console.log(res);
// }

// const lines = [];
// createInterface({
//   input: process.stdin,
//   output: process.stdout,
// }).on("line", (line) => {
//   lines.push(line.toString().trim());
// }).on("close", () => {
//   solveTestCase(lines);
// });

// function solveTestCase(test) {
//   const [P, V] = test[0].split(' ').map(Number);
//   const [Q, M] = test[1].split(' ').map(Number);

//   let s1;
//   let e1;
//   let s2;
//   let e2;
//   let res;

//   if (P - V <= Q - M) {
//     s1 = P - V;
//     e1 = P + V;
//     s2 = Q - M;
//     e2 = Q + M;

//   } else {
//     s2 = P - V;
//     e2 = P + V;
//     s1 = Q - M;
//     e1 = Q + M;

//   }

//     if (e1 >= s2) {
//         if (s1 < s2 && e1 > e2) {
//             res = Math.abs(s1 - e1) + 1;
//         } else {
//            res = Math.abs(s1 - e2) + 1;
//         }
//   } else {
//     let p1 = Math.abs(s1 - e1) + 1;
//     let p2 = Math.abs(s2 - e2) + 1;
//     res = p1 + p2;
//   }

//   console.log((res).toString());

// }

// solveTestCase(['0 7','12 5']); // 25
// solveTestCase(['2 3','10 3']); // 14
// solveTestCase(['0 1', '0 2']); // 5
// solveTestCase(['-1 12', '8 17']);
// -13 + 11   -9 + 25


function solveTestCase(test) {


    // ты определил параметры для счета, но используешь переменные из внешнего скоупа, это не ок. 
    // она должна принимать на вход все нужные для разбора данные, в твоем случае - два массива со счетом команд и признак, что первая команда на выезде.
    // в идеале все сразу привести в правильный вид, числа распарсить в number а firstGameAtHome превратить в boolean, это упростит все условия
    // разыменование const [firstPlay1, firstPlay2] = first уже можно сделать в функции;
    function calculateGoals(play1, play2, homePlayOrder) {

        const [firstPlay1, firstPlay2] = play1.split(':').map(Number);
        const [secondPlay1, secondPlay2] = play2.split(':').map(Number);

        const secondTeamScore = firstPlay2 + secondPlay2;
        const firstTeamScore = firstPlay1 + secondPlay1;

        let isFirstTeamAtHome = homePlayOrder[0] === 1 ? true : false;

        let firstTeamGuestsScore;
        let secondTeamGuestsScore;
        const scoreDiff = secondTeamScore - firstTeamScore;

        if (!isFirstTeamAtHome) {
            firstTeamGuestsScore = firstPlay1;
            secondTeamGuestsScore = secondPlay2;
        } else {
            firstTeamGuestsScore = secondPlay1;
            secondTeamGuestsScore = firstPlay2;
        }

        const guestsDiff = firstTeamGuestsScore - secondTeamGuestsScore;

        if (scoreDiff < 0) {
            return (0); // Зачем везде toString? => Это потому-что яндекс хочет ответ строкой, но я переделал все равно аккуратнее.
        }

        if (firstTeamScore === 0 && secondTeamScore === 0) { // это условие явно лишнее, этот кейс должен автоматом разгребаться => не понимаю как, долго пытался
            return (1);

        } else if (scoreDiff === 0) { // это тоже не до конца понятно зачем лишнее
            if (guestsDiff > 0) {
                return (0);
            } else {
                return (1);
            }
        }

        // выражение (secondTeamScore - firstTeamScore) используется 8 (!!!) раз, явно очень просится переменная.
        // вместо сравнений чисел через ===, < > иногда намного удобнее положить разницу в переменную и сравнивать переменную, условия и логика может заметно упроститься.
        // например:
        // const guestsDiff = firstTeamGuestsScore - secondTeamGuestsScore
        // if( guestsDiff <= 0)
        if (guestsDiff < 0) {
            if (isFirstTeamAtHome && firstTeamGuestsScore + scoreDiff > secondTeamGuestsScore) {
                return (scoreDiff);
            }
            else if (!isFirstTeamAtHome && firstTeamGuestsScore + scoreDiff > secondTeamGuestsScore) {
                return (scoreDiff + 1);

            }
            else {
                return (scoreDiff + 1);
            }
        } else if (guestsDiff === 0) {
            if (!isFirstTeamAtHome) {
                return (scoreDiff + 1);
            }

            else {
                return scoreDiff;
            }
        }
        else if (guestsDiff > 0) {
            return scoreDiff;

        }

    }
    // что делает этот return? => возвращает яндексу результат выполнения функции calculateGoals
    return console.log(calculateGoals(test[0], test[1], test[2].split('').map(Number)).toString());
}


solveTestCase(['0 : 0', '0 : 0', '1']); // 1
solveTestCase(['0 : 2', // 5
    '0 : 3',
    '1']);
solveTestCase(['0 : 5', // 6
    '5 : 5',
    '2']);
solveTestCase(['4 : 5', // 
    '2 : 4',
    '2']);
solveTestCase(['4 : 3', // 
    '0 : 3',
    '2']);

