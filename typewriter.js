const sentence = "hello there from lighthouse labs";
let t =0;
const animateSentence = function (s){
  for (const char of s) {
    setTimeout(function() {process.stdout.write(char);}, t+=1000);}
    console.log();
    process.stdout.write("\n");
}

//setTimeout(function(){ console.log("4311o "); }, 1000);
animateSentence(sentence);