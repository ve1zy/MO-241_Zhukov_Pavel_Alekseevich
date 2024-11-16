const args=Deno.args;
const a: number = Number(args[0]);
const b: number=Number(args[1]);
const c: number=Number(args[2]);
if(a==0){
    console.log(`Один корень равный ${(-c)/b}`)
}
else{
    const dis: number=b**2-4*a*c;
    if(dis==0){
        console.log(`Два одинаковых корня равных ${(-b)/2*a}`)
    }
    else if(dis<0){
        console.log("Нет корней уровнения");
    }
    else{
        const x1: number = (-b+dis**0.5)/2*a;
        const x2: number = (-b-dis**0.5)/2*a;
        console.log(`Первый корень=${x1}, второй=${x2}`);
    }
}
