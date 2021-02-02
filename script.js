let play=0///今動いているか
let count=1///アニメのカウント
let dokaben = document.getElementById("kadoben");///動作をする要素
var music = new Audio('nc150815.wav');
function dokabenscript(){
    if(play>0){///もしプレイしていたら
        return;///やらせない（固い意志）
    }

    play=1///動いていることにする

    dokaben.innerHTML=document.getElementById("dokabentext").value;///入力された文字を反映

    count = 0;///カウントをゼロに
    dokaben.id=("ani0")///アニメをゼロに戻す
    music.play();  // 再生
    let intarval = setInterval(function(){

        count++;///カウントしていく
        dokaben.id=("ani"+count);///IDを書き換え

        if(count >= 9){///アニメが終了したら
            clearInterval(intarval);　//intervalを終わる
            play=0///動いていないことにする
        }

    },300)
    
}