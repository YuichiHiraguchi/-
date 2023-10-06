'use strict';

{
  const btn1=document.getElementById('btn1');
  const btn2=document.getElementById('btn2');
  const kotae=document.getElementById('nyuryoku')
  const jikan=document.getElementById('jikan')
  const minnyuryoku=document.getElementById('hun').focus();
  const secnyuryoku=document.getElementById('byo');
  var timerID=null;
  var s=0
  var m=0
  var n=0
  var nn=1000
  var sec=0;
  //var min=0;
  let mondai=['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム']
  let results=['水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム','H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca']

  var func2=function(){
    if(jikan.textContent!=="終了"){
   //   document.getElementById('nyuryoku').blur();
   //   document.getElementById('nyuryoku').focus();
        do {
          n = Math.floor(Math.random()*results.length);
        } while (n==nn || n==nn+20 || n==nn-20);
        nn=n

        nyuryoku.readOnly=false;
        nyuryoku.value='';
        kotae.textContent =results[n];
        btn1.textContent=mondai[n];
        m=m+1
        mondaisuu.textContent="問題数："+m
        btn2.textContent="答え合わせ"
        if (m==1) {
          hun.readOnly=true
          byo.readOnly=true
          timerID = setInterval(timer,1000);
          document.getElementById('nyuryoku').focus();
        }
      }
  }

  var func1=function(){
        if (btn2.textContent=="答え合わせ" && jikan.textContent!=="終了" && btn1.textContent!=="問題スタート") {
          const nyuryokup=document.getElementById('nyuryoku').value;
          onclick="disabled=true";
         // nyuryoku.readOnly=true
         // document.getElementById('nyuryoku').blur();
          if (kotae.textContent==nyuryokup) {
            btn2.textContent="正解";
              s=s+1;
            seikaisuu.textContent="正解数："+s
          }
          else {
            btn2.textContent="不正解 : "+kotae.textContent;
           // nyuryoku.readOnly=true;
          }
        }
        else {
          func2();
        }

        if (m>=20 &&s/m>=0.8) {
          goukaku.textContent="合格！";
          clearInterval(timerID);
        }else {
          goukaku.textContent=""
        }
    }

    function timer() {
      const minnyuryoku=document.getElementById('hun').value;
      const secnyuryoku=document.getElementById('byo').value;
      sec=sec+1;
      let min1=Math.floor(sec/60);
      let sec1=sec-min1*60;

      if(secnyuryoku=="" && minnyuryoku==""){
        jikan.textContent=min1 +"　分　"+sec1+ "　秒";
      }
      else {
        if (min1>=hankaku2Zenkaku(minnyuryoku) && sec1>=hankaku2Zenkaku(secnyuryoku)){
          jikan.textContent="終了";
          nyuryoku.readOnly=true
          nen.readOnly=true
          kurasu.readOnly=true
          ban.readOnly=true
          namae.readOnly=true
          clearInterval(timerID);
        }
        else {
          jikan.textContent=min1 +"　分　"+sec1+ "　秒";
        }
      }
            };
            function hankaku2Zenkaku(str) {
              return str.replace(/[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g, function(s) {
                  return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
              });
          }

  btn1.addEventListener('click',()=>{
    return func2();
    })

    document.body.addEventListener("keydown", (e) => {
      if (e.key == "Enter"　&& e.isComposing==false) {
      return func1();
    }
  });

  btn2.addEventListener('click',()=>{
    //document.getElementById('nen').focus();
    //document.getElementById('nyuryoku').focus();
    return func1();
    
  })

}
