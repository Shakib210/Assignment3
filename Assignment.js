//https://github.com/Shakib210/Assignment3

//1
function kilometerToMeter(km){
    if(km <0){
        km*=-1;
    }
     let m=km*1000;
     return m;
}

let meter=kilometerToMeter(5);


//2
function budgetCalculator(wc,pc,lc){
    if(wc<0){
        wc*=-1
    }
    if(pc<0){
        pc*=-1
    }
    if(lc<0){
        lc*=-1
    }
    let watch=50*wc,phone=100*pc,laptop=500*lc;
    let total=watch+phone+laptop;
    return total;
    
}

let budget=budgetCalculator(1,1,1)


//3
function hotelCost(days){
    let first,second, third,remaining,total;
     if(days<0){
         days*=-1;
     }
     if(days>10){
          first=10*100;
          remaining=days-10;
          if(remaining>10){
              second=10*80;
              remaining-=10;
              third=remaining*50;
              total=first+second+third;
              return total;
          }else{
              second=remaining*80;
              total=first+second;
              return total;
          }

     }else{
         first=100*days;
         return first;
     }
}

let totalCost=hotelCost(22)



//4

function megaFriend(names){
    let len=names.length, index=0,i=0;
    if(len==0){
        console.log("its an empty array")
    }

    for(  i=0 ;i<len ;i++){
        if(names[index].length < names[i].length){
            index=i;
        }
    }
     return names[index];
}

let largestName=megaFriend(["shakib", "arif","jahid", "parthok"]);

