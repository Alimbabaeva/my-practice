// create a parent class about Sports
// number of players, name of the sport, environment

// and also create a class of WaterSports
// equipment type, water environment

// also create class of FieldSports
// field type

class Sports {
    constructor (sportName, numberOfPlayers, environment) {
      this.sportName = sportName;
      this.numberOfPlayers = numberOfPlayers;
      this.environment = environment;
    }
  
    showInfo() {
      return `${this.sportName} is played by ${this.numberOfPlayers} individuals and can be played/performed ${this.environment}.`
    }
  }
  
  // let sport1 = new Sports('Soccer', 22, 'indoor and outdoors')
  // console.log(sport1.showInfo())
  
  class WaterSports extends Sports {
    constructor (nameOfSport, numOfPlayers, environment, equipment, waterType) {
      super(nameOfSport, numOfPlayers, environment);
      this.equipment = equipment;
      this.waterType = waterType;
    }
  
    describe() {
      return super.showInfo() + ` And it requires ${this.equipment} on water and it is done on ${this.waterType}.`
    }
  }
  
  let waterSport1 = new WaterSports('Rafting', 20, 'outdoors', 'inflatable heavy duty boat', 'wild rivers');
  
  console.log(waterSport1.describe());
  
  // ======================================================
  
  class FieldSports extends Sports {
    constructor (sportName, numberOfContenders, environment, fieldType) {
      super(sportName, numberOfContenders, environment);
      this.fieldType = fieldType;
    }  
  
    describeFieldSports() {
      return super.showInfo() + ` And it is played on ${this.fieldType}.`
    }
  }
  
  let fieldSport1 = new FieldSports('Soccer', 22, 'indoors and outdoors', 'Soccer stadiums')
  
  console.log(fieldSport1.describeFieldSports())
  
  // create 1 more sport type






  // let numbers = [1,2, [4,5]]
// let flatNums = numbers.flat()

// console.log(flatNums)

// let numbers2 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]]
// let flatNums2 = numbers2.flat()

// console.log(flatNums2)

// let hasThree = flatNums.includes(3)
// console.log('Does numbers include 3?', hasThree)

// const elements = ['Fire', 'Air', 'Water'];

// let joinedIntoString = elements.join(' ');
// console.log(joinedIntoString)

// return the number of times 'word' appear(s) in 'str'
function search_word(str, word) {
    // return str.split(word).length-1
    let strArr = str.split(' ')
    // let count = 0
    // for (let i = 0; i < strArr.length; i++) {
    //   if (strArr[i] === word) count++
    // }
    // return count
    let obj = {}
    for (let i = 0; i < strArr.length; i++) {
      if (obj.hasOwnProperty(strArr[i])) obj[strArr[i]]++
      else obj[strArr[i]] = 1
    }
    return obj[word]
  }
  // ['The', 'fox', 'quick', 'fox', 'brown', 'fox']
  console.log(search_word('The fox quick fox brown fox fox', 'fox')) // 3







  // 1. how to know if a given data is array or not? 
let cars = ['volvo', 'ford', 'lexus'];
let carsObj = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  carDetails: [4, 6, 'leather seats', 'cruise controlled', true]
}

console.log(Array.isArray(cars))
console.log(typeof cars)
console.log(typeof carsObj)

// task is to print out the values of obj
for (let el in carsObj) {
  console.log('Property: ', carsObj[el])
}
// let i = 0;
// for (; i < cars.length; i++) {
//   console.log('Car: ', cars[i])
// }

// remove 'year' property from carsObj
console.log(delete carsObj.year)

console.log('After removing year: ', carsObj)

// remove a property if it's value is an array
for (let el in carsObj) {
  if (Array.isArray(carsObj[el])) delete carsObj[el]
}

console.log('After removing array el: ', carsObj)

// convert below variable to char array ['C', 'h', 'i', 'c', 'a', 'g', 'o']
let city = 'Chicago'

let nameArr = [...city]
// let nameArr = city.split('')
// let lowered = city.toLocaleLowerCase()
// console.log(lowered)

console.log(nameArr)

let quote = 'Practice#makes#perfect!'

// ['Practice', 'makes', 'perfect!']
let separated = quote.split('#');
console.log(separated)