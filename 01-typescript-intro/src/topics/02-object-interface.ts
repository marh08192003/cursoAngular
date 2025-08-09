const skills:string[] = ['Bash', 'Heal'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Tulua';

console.table(strider);
console.log(strider);


export{}