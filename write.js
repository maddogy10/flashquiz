const termBox = document.getElementById("writegiven")
const writeInput = document.getElementById("writeInput")
const userWrote = document.getElementById("userwrote")
const correctAns = document.getElementById("correctAns")
const rightWrongWrite = document.getElementById("rightWrongWrite")
const contButton = document.getElementById("contButton")
const remLeft = document.getElementById("remleft")
const incLeft = document.getElementById("incleft")
const corLeft = document.getElementById("corleft")
let termArrNum = [];
let defArrNum = [];
let numTerms;
let termArr = []
let defArr = []
let x;
//let wrongTermArr = []
//let wrongTermDef = []
let ogTermArr = []
let ogDefArr = []
function termWrite() {
  contButton.innerHTML = "Continue"
    x = 0;
  numTerms = 100 / retrieved.length
 /*
  let termArrNum = []
 let randTermArr = []
 for (i = 0; i < numOfTerms; i++) {
  randTermArr[i] = i
 }
 
  for(j = 0; j < retrieved.length; j++ ) {
   /* 
  console.log(randTermArr)
  if (randTermArr.includes(randTerm)!=true) {
    let i = 0
    termArrNum[i] = retrieved[randTerm]
    i++
  }*/
  // while i < retrieved.length
 
  for(i =0; i < retrieved.length; i++) {
    termArr[i] = i;
    defArr[i] = i;
   
  }
  let j = 0;
  while (termArr.length !=0) {
  
  
  let randTerm = Math.floor(Math.random()*retrieved.length)
  //  randTermArr[j] = randTerm
    if (termArr.includes(randTerm)) {
      termArrNum[j] = retrieved[randTerm]
      defArrNum[j] = gotDefs[randTerm]
     // console.log(termArr)
     // console.log(termArrNum)
     
     for (i=0; i < termArr.length; i++) {
      if(termArr[i] == randTerm) {
        termArr.splice(i, 1)
        console.log("I spliced " + i)
     //   console.log(termArr)
      }
     }
      j++
    }
   
   
  

 // defArr = termArr
  
  //find array value where rand num is drawn and remove from array
  }
  //make def array
  //implement array into html
  for (let i=0; i < termArrNum.length; i++) {
    ogTermArr[i] = i;
    ogDefArr[i] = i;
    console.log(ogTermArr)
    console.log(ogDefArr)
  }
 /*  ogTermArr = termArrNum
    ogDefArr = defArrNum*/
  termBox.innerHTML = termArrNum[x];
  }



function checkWrite() {
  console.log("enter")
  console.log(x)
  console.log(termArr.length)
  console.log(defArrNum[x])
 if (writeInput.value == defArrNum[x] && x <= termArrNum.length) {
  
    rightWrongWrite.style.display = "block"
    userWrote.style.display = "block"
    userWrote.innerHTML = writeInput.value
    userWrote.style.color = "green"

    correctAns.innerHTML = defArrNum[x];
    correctAns.style.color = "green"
     // pop last element of the array
    if (ogTermArr.length > 0) {
      if (x < ogTermArr.length - 1) {
        ogTermArr.splice(x,1)
      ogDefArr.splice(x,1)
      console.log("spliced")
      } else if (x >= ogTermArr.length -1) {
        ogTermArr.pop()
        ogDefArr.pop()
    } else {
      ogTermArr[0] = null
      ogDefArr[0] = null
    }
  }
    console.log(ogTermArr)
    console.log(ogDefArr)
    console.log(defArrNum)
   // remLeft.style.width -= numTerms
   
    x+=1;
    //do it with numbers instead of copying array
    termBox.innerHTML = termArrNum[x];
    writeInput.value = ""

  } else if (writeInput.value != defArrNum[x]  && x < termArrNum.length) {
    console.log("no")
    rightWrongWrite.style.display = "block"
    userWrote.innerHTML = writeInput.value
    userWrote.style.color = "red"
    correctAns.innerHTML = defArrNum[x];
    correctAns.style.color = "green"
    x+=1;
    termBox.innerHTML = termArrNum[x];
    writeInput.value = ""
 }
 
}
function closeCorrWrite() {

  if (x <= termArrNum.length -1) {
  rightWrongWrite.style.display = "none"
  console.log("close")
  } else if (x > termArrNum.length - 1) {
    if (ogTermArr.length == 0) {
      // rightWrongWrite.style.display = "block"
    //userWrote.style.display = "none"
    //change continue button to restart round
      contButton.innerText = "Restart"
      console.log(contButton.innerText)
      //termArrNum = ogTermArr
    //  defArrNum = ogDefArr
      termWrite()
    } else {
     
      for (let i = 0; i < termArrNum.length; i++) {
        if (!ogTermArr.includes(i)) {
          console.log(termArrNum[i])
          termArrNum.splice(i,1)
          defArrNum.splice(i,1)
        }
        console.log(termArrNum)
        console.log(defArrNum)

      }
    }
   // let x > termArrNum.length - 1 && ogTermArr[0] == null
   // allow it to restart
   }
}


