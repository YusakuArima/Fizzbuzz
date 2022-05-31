function fizzbuzz (numbers){
    for (var i = 1; i<=numbers ;i++) {
        if (i%15 === 0) {
            console.log("fizz buzz");} 
        else if (i%3 === 0) {
            console.log("fizz");}
        else if (i%5 ===0 ) {
            console.log("buzz")}
        else {console.log(i);}
    }
}
fizzbuzz (100);

/*
1-100までの配列が必要な場合
[...Array(100)].map((_, i) => i + 1));
*/
