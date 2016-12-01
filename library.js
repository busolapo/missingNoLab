function findMissing(arr1, arr2) {
    var a = [];
    if(JSON.stringify(arr1) === JSON.stringify(arr2)){
      return 0;
    }else{
      for (var i = 0; i < arr1.length; i++) {
        a[arr1[i]] = true;
    }
    for (var j = 0; j < arr2.length; j++) {
        if (a[arr2[j]]) {
            delete a[arr2[j]];
        } else {
            a[arr2[j]] = true;
        }
    }
    for (var k in a) {
        return parseInt(k);
    }
  }
}