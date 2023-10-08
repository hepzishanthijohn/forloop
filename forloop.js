const data=[{
    firstname:"john",
    lastname:"joshuva",
    id: 46737,
    username:"johnjosh",
    password:"john@12345",
}
]
for(let i=0;i<data.length;i++){
    console.log(data[i]);
}
data.forEach(e=>console.log(data));

//for in

for(let x in data){
    console.log(`${x}=>${data[x]}`);
}


for(let elements of data){
    console.log(elements);
}