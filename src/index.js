module.exports = function multiply(first, second) {
    var a=[];
   if (second.length>first.length) {
        var tmp=second;
        second=first;
        first=tmp;
    }

   for (var i=0; i<second.length; i++) {
        a[i]=[];
        for (var j=0; j<first.length; j++) 
                   a[i][j]="";
   }
   
   
   for (var j=0; j<second.length; j++)
     for (var i=0; i<first.length; i++) {
        a[j][i]=String((first[i])*(second[second.length-1-j]));
     }

  var str=[];

   for (var j=0; j<second.length; j++) {
      str[j]=a[j][first.length-1]; 
      for (var i=first.length-2; i>-1; i--) {
        if (str[j].length>first.length-1-i) 

           str[j]=String(Number(a[j][i])+Number(str[j][0]))+str[j].substring(1, str[j].length);
        else 
           str[j]=a[j][i]+str[j];
      }
   }

   var str1="";
   
   str1=str[0];

   var arr=[];
   var e="";
   var l;
   var str32="";
   for (var i=1; i<str.length; i++) {
 
        arr=str1.split("");
        e="";     
        var arr1=str[i].split("");
        var k=0;
        for (var j=str1.length-i-1; j>-1; j--) {
            arr[j]=String(Number(arr[j])+Number(arr1[(arr1.length-1-k)])+e);
            l=arr1.length-1-k;
            k=k+1;
            e="";
            if (arr[j].length>1) {
                 e=Number(arr[j].substring(0,1));
                 arr[j]=arr[j].substring(1,2);
            }
        }
        if (arr1.length-1-k>-1) {
           if (l==2) {
               str32=String(e+Number(arr1[0]+arr1[1]));
               str1=str32+arr.join("");
           }
           else {
           arr1[0]=String(e+Number(arr1[0]));
           str1=arr1[0]+arr.join("");}
        } 
        else 
           str1=String(e)+arr.join("");
   }

   
   return str1; 
}
