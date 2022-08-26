
let students = [
    {
        name: "Genesis",
        age: 21
    },

    {
        name: "Exodus",
        age: 25
    },

    {
        name: "Leviticus",
        age: 18
    },

    {
        name: "Numbers",
        age: 17
    },
     
    {
        name: "Deuteronomy",
        age: 16
    },

    {
        name: "Joshua",
        age: 23
    },

    {
        name: "Judges",
        age: 33
    },

    {
        name: "Ruth",
        age: 53
    },

    {
        name: "1 Sam",
        age: 40
    },

    {
        name: "2 Sam",
        age: 20
    },

    {
        name: "1 Kings",
        age: 19
    },

    {
        name: "2 Kings",
        age: 28
    },

    {
        name: "Ezra",
        age: 56
    },

     ]

     const below20=()=>{
        for(let m=0;m<students.length;m++){
           
            let studentsfilter = students[m].age;
            if(studentsfilter<20){
                console.log(students[m])
            }
        }
     }

     below20()


     // 2. Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

// Example Input:
// {name : ‘RajiniKanth’, age : 25, hasPets : true}
// Example Output:
// [‘name’, ‘age’, ‘hasPets’]


let arrayName = 
    {
        name1:"RajiniKanth",
        age: 25,
        hasPets: true
    }


const printAllKeys=()=>{
    let onlykeys = Object.keys(arrayName)
    console.log(onlykeys)
}
printAllKeys()



// function digitize(n) {
    
//     return n.toString().split('').reverse().map(Number);
// }
// console.log(digitize(9876))


// const checkCapitalize=(letters)=>{
     
//      let convertToUpper = letters.toUpperCase()
//      console.log (convertToUpper)
//      if(letters == convertToUpper){
//         return true
//      }else{
//         return false
//      }
// }

// console.log(checkCapitalize(''))

// function digitize(num) {
//     return num.toString().split('').reverse().map(Number);
// }

// console.log(digitize(1234))