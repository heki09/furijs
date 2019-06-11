let createMail=(name,bill)=>{
    let msg=`Mr.${name}
You won ${bill}M.`;
    console.log(msg) ;   
}

let calBill=(bill)=>{
    return bill*1.10;
}

let data=[
    {name:'Yamada',bill:100,flg:true},
    {name:'Nomura',bill:150,flg:false}
];

for (let rec of data){
     let bill =rec['bill']
    if(rec['flg']){
        bill=calBill(bill);
    }

    createMail(rec['name'],bill);

}