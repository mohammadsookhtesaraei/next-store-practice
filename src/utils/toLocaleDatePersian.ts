
export const toLocalStringShortDate=(date:Date)=>{
    const createDate= new Date(date ?? "").toLocaleDateString("fa-IR",{
        // weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric"
    });
    return createDate;
}