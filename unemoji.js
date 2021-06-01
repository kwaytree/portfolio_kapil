function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code >= 32 && code < 126)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

const delay = ms => new Promise(res => setTimeout(res, ms));

let convertBtn = document.querySelector(".btn");
let copyBtn = document.querySelector(".green");

const processText = (inputText) =>{
    let outputText = "";
    for(let i=0;i<inputText.length;i++){
        if(isAlphaNumeric(inputText[i]))
            outputText+=inputText[i]
    }
    return outputText;
}

convertBtn.addEventListener("click",()=>{   
    let inputText = document.querySelector("#inputText").value;

    document.querySelector("#outputText").value = processText(inputText);
})

copyBtn.addEventListener("click",async()=>{   
    copyTextToClipboard(document.querySelector("#outputText").value);
    let h3 = document.createElement('h6');
    h3.innerHTML = "Copied to clipboard";
    document.querySelector(".fix").prepend(h3);
    await delay(3000);
    document.querySelector(".fix").removeChild(document.querySelector(".fix").firstChild);
})