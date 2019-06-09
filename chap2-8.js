let text=prompt("input age");
if(isNaN(text)){
    console.log("NOT Number")
}else{
    let age=parseInt(text);
    if(age>6 && age<15){
        console.log("OK");
    }else{
        console.log("NG");
    }

};