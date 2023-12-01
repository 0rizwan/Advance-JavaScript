export let name = "Mendy";

export function student(name, age){
    return `your name is ${name} and age is ${age}`
}

export let arr = [1,2,3,4];

// if we are export many things then we can export them in a single line like this 
// export { name, student, arr };

export default function (){
    console.log("bsdk");
};