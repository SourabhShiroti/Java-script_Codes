let items=[250,645,300,900,50];
let discount;

discount=(items[0]*10)/100;
items[0]=items[0]-discount;

discount=(items[1]*10)/100;
items[1]=items[1]-discount;

discount=(items[2]*10)/100;
items[2]=items[2]-discount;

discount=(items[3]*10)/100;
items[3]=items[3]-discount;

discount=(items[4]*10)/100;
items[4]=items[4]-discount;

console.log("After discount offer All The Items");
for(let i=0; i<items.length; i++){
    console.log(items[i]);
}