const sentence = "hello there from lighthouse labs\n";
let timer = 0;
for(let word of sentence){
  setTimeout(()=>{
    process.stdout.write(word);
  }, timer += 50);
}
