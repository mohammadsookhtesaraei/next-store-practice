type NewObject={
    name:string,
    email:string,
    phoneNumber:string,
    biography:string
}

// "@ts-expect-error"
export const objectUtils=(obj:NewObject,includesKey:string[])=>{

const newObject={} as NewObject;

Object.keys(obj)
.filter((item:string)=>includesKey.includes(item))
.forEach((item:string)=> {
    newObject[item as keyof NewObject]=obj[item as keyof typeof obj];
});

return newObject

}