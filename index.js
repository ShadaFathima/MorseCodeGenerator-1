const mapping = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J":".--",
  "K":"-.-",
  "L":".-..",
  "M":"--",
  "N":"-.",
  "O":"---",
  "P":".--.",
  "Q":"--.-",
  "R":"._.",
  "S":"...",
  "T":"-",
  "U":"..-",
  "V":"...-",
  "W":".--",
  "X":"-..-",
  "Y":"-.--",
  "Z":"--..",

  "0":"-----",
  "1":".----",
  "2":"..--",
  "3":"...--",
  "4":"....-",
  "5":".....",
  "6":"-....",
  "7":"--...",
  "8":"---..",
  "9":"----.",

  "?":"..--.."
};
var code;
function texttomorse()
{
    let input=document.getElementById("input").value;

    input=input.toUpperCase();

    let arr1=input.split("");

    let arr2=arr1.map(x => {
        if(mapping[x])
        {
            return mapping[x];
        }

        else
        {
            return '/';
        }
    });

    code=arr2.join(" ");
    document.getElementById("output").value=code;
}

function playmorse(e)
{
    var audio1=document.getElementById('a1');
    var audio2=document.getElementById('a2');
    var audio3=document.getElementById('a3');
    if(!code)
    return;
    console.log(code.length);
    for(var i=0;i<code.length;i++)
    {
        // console.log(code[i])
        if(code[i]==='.')
        {
            console.log('block1:'+i)
            audio1.currentTime=0;
            audio1.play();
            audio3.currentTime=0;
            audio3.play();
        }

        else if(code[i]==='-')
        {
            console.log('block2:'+i)
            audio2.currentTime=0;
            audio2.play();
            audio3.currentTime=0;
            audio3.play();
        }

        else if(code[i]=='/')
        {
            console.log('block3:'+i)
            audio3.currentTime=0;
            audio3.play();
        }
    }

    // console.log(audio1);
    // console.log(audio2);
    // audio1.play();
    // audio1.play();
    // audio3.play();
    // audio2.play();
    // if(!code)
    // return;

    // code.forEach(p => {
        
    // });
    // if(!audio)
    //     return;
    // audio.currentTime=0;
    // audio.play();

}