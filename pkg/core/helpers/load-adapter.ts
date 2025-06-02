export function loadAdapter(path: string, cb: Function): any | Error{
  try{
    return cb ? cb() : require(path);
  }catch(e){
    console.error(`[ERROR] ${e?.message}`);
    process.exit(1);
  }
}