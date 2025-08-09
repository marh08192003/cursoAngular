export class Person{

    constructor(
        public firstName: string, 
        public lastName: string, 
        private addres: string = 'No Address'
    ){}
}

/* export class Hero extends Person{
    

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'New York')
    }

} */


export class Hero {
    
    /* public person: Person; */

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        /* this.person = new Person(realName); */
    }

}


const tony = new Person('Tony',' Stark', 'NY')
const ironman = new Hero('Iroman', 45, 'Tony', tony);

console.log(ironman)