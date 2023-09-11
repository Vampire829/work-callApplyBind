// const student ={
//   stack: ['HTML'],
//   level: 1,
//   improveLevel(){
//     this.level++;
//     if(this.level === 2){
//         this.stack.push('CSS')
//     }else if(this.level === 3){
//         this.stack.push("JavaScript")
//     }else if(this.level === 4){
//         this.stack.push('React')
//     }else if(this.level === 5){
//         this.stack.push('Node Js')
//     }else if(this.level > 5){
//         alert('Студент выучил все технологии!')
//     }
//     return this.stack
//   }
// }

// student
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
// console.log(student.improveLevel())
// console.log(student.improveLevel())

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
    return 'Гав-Гав';
    }
    }
    const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
    return 'Чик-чирик';
    }
    }

    function makeDomestic(isDomastic){
        let Domastic = ['Собака', 'Кошка', 'Хомяк'];
    this.isDomastic = Domastic.includes(isDomastic);
        return `${this.type} По имени ${this.name} говорит ${this.makeSound()}`
    }
    
  console.log(makeDomestic.call(bird, bird.type))
  console.log(bird)
  console.log(makeDomestic.apply(bird, [bird.type]))
  console.log(bird)
  const bindPrint=makeDomestic.bind(dog, dog.type)
console.log(n())
console.log(dog)


