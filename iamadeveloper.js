
const input ={
    a:'I',
    b:['not','am'],
    c:{
      a:['f','f','a','n','f','f'],
      b:['a'],
      c:['s','o','m','e']
      },
    d:['repoleved']
  };
  
delay().then(function(response) {
    rest(response);
});

function delay() {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve('awesome');
    },1000);
  });
}

function rest(response)
{
    var i;
    var reversedText='';
    var origString=input.d[0];
    for (i = input.d[0].length-1; i>=0; i--) {
      reversedText += origString[i];
    }

    document.getElementById("show").innerHTML=input.a+' '+input.b[1]
    +' '+input.c.a[2]+input.c.a[3]+' '+response+' '+reversedText;
 };

