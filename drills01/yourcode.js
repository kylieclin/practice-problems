
function sumArray(arr){
    var sum = 0
 for ( var i = 0 ; i < arr.length; i ++){
     sum += arr[i]
 }
return sum;	
}

function fitWithinVal(arr, num){
    var newnum =0;
    var newarr =[];
  for ( var i = 0; i < arr.length; i++){ 
      if ( newnum + arr[i] < num){
          newnum = newnum + arr[i];
          newarr.push(arr[i]);
      }
  }
  return newarr;
}

function getAllNamesShorterThan(arr, num){
    var newarr2 = [];
    for (var i = 0; i < arr.length; i ++){
        if ( arr[i].length <= num){
            newarr2.push(arr[i]);
        }
    }
    return newarr2;
}

function makeLabel(obj){
    return obj.greeting + " " + obj.givenName + " " + obj.familyName + "\n" + obj["home address"].streetNumber + " " + obj["home address"].streetName + "\n" + obj["home address"].city + ", " + obj["home address"].state + " " +obj["home address"].zip;
}
// wondering if theres more efficient way
