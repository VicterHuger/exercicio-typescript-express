export async function returnId(id:string):Promise<void | never>{
    if(id.length===0) {
        type objectError = {
            code:string;
            message: string;
        };
        const error:objectError = {code:"NotFound", message:"Id can't be empty!"}
        throw (error);
    }
    return;
    
}