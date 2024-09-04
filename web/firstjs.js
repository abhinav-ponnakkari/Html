// console.log("hello");
// let price=20;
// let str="Abhinav";
// let newStr=str.toUpperCase();
// console.log(newStr);
// let input= prompt("enter the number")
// while(input!= 6)
// {
//     console.log("wrong number")
//     input=prompt("enter the number")
// }
// console.log("correct number")
// let arr=[85,97,54,37,76,60];
// let sum=0;
// for(let i of arr)
// {
//     sum+=i;
// }
// console.log(sum);
// let arr1 = [250,645,300,900,50];
// console.log(arr1);

// for(let i=0;i<arr1.length;i++)
// {
//     arr1[i]=arr1[i]*0.9;
// }
// console.log(arr1);


const vowel = (msg) => {
  let count = 0;
    for (let i = 0; i < msg.length; i++) {
        if (
            (msg.charAt(i) === "a") |
            (msg.charAt(i) === "e") |
            (msg.charAt(i) === "i") |
            (msg.charAt(i) === "o") |
            (msg.charAt(i) === "u")
        )
            count++;
    }
    console.log(count);
};
