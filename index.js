const mapping = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..--",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  "?": "..--..",
};
var code;
function texttomorse() {
  let input = document.getElementById("input").value;

  input = input.toUpperCase();

  let arr1 = input.split("");

  let arr2 = arr1.map((x) => {
    if (mapping[x]) {
      return mapping[x];
    } else {
      return "/";
    }
  });

  code = arr2.join(" ");
  document.getElementById("output").value = code;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var audio1=document.getElementById('a1');
var audio2=document.getElementById('a2');
var audio3=document.getElementById('a3');
var p=0;
var c=0;

function pause(e)
{
    p=1;
    c++;
}

async function playmorse(e)
{
    if(!code)
    return;
    console.log(code.length);
    for(let i=0;i<code.length;i++)
    {
        if(p==1 && c==1)
        {
            c=0;
            break;
        }

        if(code[i]==='.')
        {
            console.log('block1:'+i)
            audio1.currentTime=0;
            audio1.play();
        }

        else if(code[i]==='-')
        {
            console.log('block2:'+i)
            audio2.currentTime=0;
            audio2.play();
        }

        else if(code[i]=='/')
        {
            console.log('block3:'+i)
            audio3.currentTime=0;
            audio3.play();
        }

        await sleep(420)

    }

}
