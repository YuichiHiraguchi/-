'use strict';

{
  const btn1=document.getElementById('btn1');
  const btn2=document.getElementById('btn2');
  const kotae=document.getElementById('nyuryoku')
  var s=0
  var m=0

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
  })

  btn2.addEventListener('click',()=>{
    if (btn2.textContent=="答え合わせ") {
      const nyuryokup=document.getElementById('nyuryoku').value;
      onclick="disabled=true";
      nyuryoku.readOnly=true
      if (kotae.textContent==nyuryokup && nyuryokup!=="") {
        btn2.textContent="正解";
          s=s+1;
        seikaisuu.textContent="正解数："+s
      }else if (nyuryokup!=="") {
        btn2.textContent="不正解 : "+kotae.textContent;
      }else {
        nyuryoku.readOnly=false;
      }

    if (m>=20 &&s/m>=0.8) {
      goukaku.textContent="合格！"
    }else {
      goukaku.textContent=""
    }
    }

  })

}
