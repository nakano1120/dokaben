let play=0///今動いているか
let count=1///アニメのカウント
let dokaben = document.getElementById("kadoben");///動作をする要素
function dokabenscript(){
    if(play>0){///もしプレイしていたら
        return;///やらせない（固い意志）
    }

    play=1///動いていることにする

    let obj = document.getElementsByClassName("dokaben");///
    dokaben.innerHTML=document.getElementById("dokabentext").value;
    count = 0;
    let i=9
    dokaben.id=("ani0")
    let intarval = setInterval(function(){
        count++;
        dokaben.id=("ani"+count);
        if(count >= 9){
            clearInterval(intarval);　//idをclearIntervalで指定している
            play=0
        }
    },200)
    
}