var n=6;
var i,sum=1;
console.log(Math.floor(n/2));
for(i=2;i<=Math.floor(n/2);i++){
    if((n%i)==0){
        sum=sum+i;
    }
    else
        continue;
}
if(sum==n){
    console.log('no is perfect');
}
else{
    console.log('no is not perfect');
}
console.log(sum);
