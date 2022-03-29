//Answers to Algorithm Test

// QUESTION ONE : BUYING AND SELLING PRICE FOR STOCK VALUE FOR COMPANY X

// The values in the array represent the cost of a stock each day. As we can buy and sell the stock only once, we need to find the best buy and sell prices for which our profit is maximized


let BuySellday = function (price, n) {

    // Prices must be given for at least two days
    if (n == 1)
        return;

    // looping through given price array using while statement
    let i = 0;

    while (i < n - 1) {

        // Find Local Minima
        // Note that the limit is (n-2) as we are
        // comparing present element to the next element
        while ((i < n - 1) && (price[i + 1] <= price[i]))
            i++;
        // If we reached the end, break
        // as no further solution possible
        if (i == n - 1)
            break;

        // Store the index of minima
        let buy = i++;

        // Find Local Maxima
        // Note that the limit is (n-1) as we are
        // comparing to previous element
        while ((i < n) && (price[i] >= price[i - 1]))
            i++;

        // Store the index of maxima
        let sell = i - 1;

        console.log(`Buy on day: ${buy} Sell on day: ${sell}`)
    }
}

let price = [200, 1,5,6,7,34,10];//Buy on day: 1 Sell on day: 5
let n = price.length;

BuySellday(price, n);

//[1,5,6,7,34,10,300]
// Buy on day: 0 Sell on day: 4
//  Buy on day: 5 Sell on day: 6

//[10,1,5,6,7,34,10,20]
// Buy on day: 0 Sell on day: 4
//  Buy on day: 6 Sell on day: 7

// [2,200,1,0,10]
// Buy on day: 0 Sell on day: 1
//  Buy on day: 3 Sell on day: 4

// [7,10]
// Buy on day: 0 Sell on day: 1

// [1]
//was difficult getting a return value



//   QUESTION TWO FLATTEN ARRAY

let myarray =  [1,2,[3,4,[5,6],7,[8,9]]];

const flattenarray = (arr) => {
    //using the reduce method
    Newarray = arr.reduce((acc,arrayitem)=>{
        // if its an array
        if (Array.isArray(arrayitem)) {
            acc = acc.concat(flattenarray(arrayitem))
        } else {
            acc.push(arrayitem)
        }
        return acc;
    },[])
    return Newarray

}

console.log(flattenarray(myarray));

//output [1,2,3,4,5,6,7,8,9]


//    QUESTION THREE ARRAY OF N STRINGS

function findWord(a){

    console.log(a);
    let split = [];
    let len = a.length;
    let original = a;
  
    
    let firstLetter = [],
        secondLetter =[],
        currentIndex = 0,
        count = {},
        letter;
    
    //count the number of repetitions for each letter
    while(currentIndex<len){
      firstLetter.push(a[currentIndex].charAt(0));
      secondLetter.push(a[currentIndex].charAt(2));
      
      recordLetter(count, a[currentIndex].charAt(0), a[currentIndex].charAt(2));
      //console.log(count);
      currentIndex++;
    }
    
    //console.log(firstLetter, secondLetter, count);
   
    //The first letter should be in firstLetter array 
    //and has count of 1.
    let first;
    for(let c in count){
      if(count[c] === 1){
        if(firstLetter.indexOf(c) >= 0) first = c;
      }
    }
    
    
    let result = first;
    currentIndex = firstLetter.indexOf(first);
    let times = 0;
    while(times < len){
      result += secondLetter[currentIndex];
      currentIndex = firstLetter.indexOf(secondLetter[currentIndex]);
      
      times++;
    }
  
    console.log(result);
    return result;
  }
  
  
  function recordLetter(count, letter1, letter2){
  
    count[letter1] = count[letter1] ? count[letter1]+1 : 1;
    count[letter2] = count[letter2] ? count[letter2]+1 : 1;
    
    return count;
  }

  findWord(["S>P", "P>A","A>I","I>N"])//output SPAIN
  findWord(["E>N", "P>E"])//output PEN
  findWord(["M>P", "L>A","A>M"])//output LAMP


  // QUESTION 4

  // Im really sorry i dont really understand this part...been figuring a way out to solve
  //this problem.....

  function maximumCardDecks(arr, n, k)
		{
		
			// Sort the whole array
			arr.sort(function (a, b) { return a - b })
			
			// Store the binary search range

			let L = 0;
			let R = arr[n - 1] + k + 1;

			//search on range
			while (L + 1 < R) {
				let mid = (L + R) / 2;
				let need = 0;
				for (let i = 0; i < n; i++) {
					if (arr[i] < mid) {
						need += mid - arr[i];
					}
				}
				if (need <= mid && need <= k) {
					L = mid;
				}
				else {
					R = mid;
				}
			}
			return L;
		}

		let N = 17, K = 2;
		let arr = ["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"];
		console.log(maximumCardDecks(arr, N, K));
        //GAVE AN OUTPUT OF 0