'use strict';

{
  const btn1=document.getElementById('btn1');
  const btn2=document.getElementById('btn2');
  const kotae=document.getElementById('nyuryoku')
  const jikan=document.getElementById('jikan')
  var timerID=null;
  var s=0
  var m=0

  var sec=0;
  var min=0
    function timer() {
      sec=sec+1;
      if (min=0) {
       jikan.textContent=min +"　分　"+sec+ "　秒";
        }
         else {
          let min1=Math.floor(sec/60);
          let sec1=sec-min1*60;
           　　//　　↓制限時間を変更するときはここを変える。
          if (min1>=10000) {
            jikan.textContent="終了";
            nyuryoku.readOnly=true;

          }else {
          jikan.textContent=min1 +"　分　"+sec1+ "　秒";
                }
              }
    };

  btn1.addEventListener('click',()=>{
      let mondai=['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム']
      let results=['水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム','H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca']
      let n = Math.floor(Math.random()*results.length);
      nyuryoku.readOnly=false;
      nyuryoku.value='';
      kotae.textContent =results[n];
      btn1.textContent=mondai[n];
      m=m+1
      mondaisuu.textContent="問題数："+m
      btn2.textContent="答え合わせ"
      if (m==1) {
        timerID = setInterval(timer,1000);
      }
    })

  btn2.addEventListener('click',()=>{
      if (btn2.textContent=="答え合わせ" && jikan.textContent!=="終了" && btn1.textcontent!=="問題スタート" ) {
        const nyuryokup=document.getElementById('nyuryoku').value;
        onclick="disabled=true";
        nyuryoku.readOnly=true
        if (kotae.textContent==nyuryokup) {
          btn2.textContent="正解";
            s=s+1;
          seikaisuu.textContent="正解数："+s
        }
        //else if (nyuryokup!=="") {
        //  btn2.textContent="不正解 : "+kotae.textContent;
        //}
        else {
          btn2.textContent="不正解 : "+kotae.textContent;
          //nyuryoku.readOnly=false;
        }
        
        else(btn2.textcontent!=="答え合わせ" && jikan.textContent!=="終了") {
          
          let mondai=['H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム']
          let results=['水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム','H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca']
          let n = Math.floor(Math.random()*results.length);
            nyuryoku.readOnly=false;
            nyuryoku.value='';
            kotae.textContent =results[n];
            btn1.textContent=mondai[n];
            m=m+1
            mondaisuu.textContent="問題数："+m
            btn2.textContent="答え合わせ"
            if (m==1) {
              timerID = setInterval(timer,1000);
            }
        }
          
          

      if (m>=20 &&s/m>=0.8) {
        goukaku.textContent="合格！"
        clearInterval(timerID);
      }else {
        goukaku.textContent=""
      }
    }
  })
}
