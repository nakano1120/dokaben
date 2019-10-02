var quiz = ["おせち　おせち　おせ", "チーズ！", "しずおか！", "イデホ！", "ちなちな！", 1];
var chi =["ちくわ","チーズ","ちまめ","ちきゅうぎ","ちらしずし","チョコ","チキン","ちすじ","チャイナ","ちり(地理)","ちょうないかい","ちんすこう","ちず"]
var lose=["まけ","しじみ","お〜せ〜ち〜","きのこ","しずく","おおい","なんだよ！","わからん！","...","きもち","さとし","愛と青春の旅立ち","ちんfんbj","なちす","ぎちょう","ちょぎ","차","ちょぬるん","くりはま","よこすか","つんく","ばす","くるま","めしいくか？","チョン小西","しんぎ","しょうが","マトリックス"]
//問題を順番に表示させるためのカウンター
var order = 0;
var correct = 0;
var startTime
var answerTime
var nankai=10;
var owari = 0
function set(){
    var random = Math.floor( Math.random() * 4 ) + 1;
    var orderArea = document.getElementById("order");
    var question = document.getElementById("question");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    var loseanswer = Math.floor( Math.random() * lose.length )
    quiz[1] = lose[loseanswer]
    var loseanswer = Math.floor( Math.random() * lose.length )
    quiz[2] = lose[loseanswer]
    var loseanswer = Math.floor( Math.random() * lose.length )
    quiz[3] = lose[loseanswer]
    var loseanswer = Math.floor( Math.random() * lose.length )
    quiz[4] = lose[loseanswer]
    var winanswer = Math.floor( Math.random() * chi.length )
    quiz[random] = chi[winanswer]
    orderArea.innerHTML = "【第" + (order + 1) + "問】";
    question.innerHTML = "おせち！　おせち！　おせ";
    answer1.innerHTML = quiz[1];
    answer2.innerHTML = quiz[2];
    answer3.innerHTML = quiz[3];
    answer4.innerHTML = quiz[4]; 
    quiz[5] = random
    startTime = Date.now();
}
function judge(num){
    if(owari == 1){
        return
    }
    answerTime = Date.now();
    console.log(answerTime - startTime);
    var result = document.getElementById("result");
    var answer = quiz[5];
    if(answerTime - startTime > 3000){
      result.innerHTML = "リズムに乗れなかったのでアウト...";
      order = nankai - 1
    }else if(answer == num){
      correct += 1;
      result.innerHTML = "OK！　"+correct+"コンボ！";
    }else{
      result.innerHTML = "アウト...";
      order = nankai - 1
    }
    order += 1;
    var quizprogress = document.getElementById("quizprogress");
    quizprogress.value= 100 / nankai * order
    if(order == nankai){
        result.innerHTML += 
        "<br>"  + correct + "回成功！";
        var rank= ""
        if((100 / nankai * correct) > 80){
            rank="1級"
        }else if((100 / nankai * correct) > 60){
            rank="2級"
        }else if((100 / nankai * correct) > 40){
            rank="3級"
        }else if((100 / nankai * correct) > 20){
            rank="4級"
        }else if((100 / nankai * correct) >= 0){
            rank="5級"
        }
        result.innerHTML += "あなたは "+rank+"！"
        owari = 1
    }
    else{
        set();
    }
}