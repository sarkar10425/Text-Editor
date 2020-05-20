updateText = () => {
    let ip = document.getElementById('text-input').value;
    document.getElementById('text-output').innerText = ip;
}

makeBold = (elem) => {
  
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

makeUnderline = (elem) => {
    
    elem.classList.toggle('active');
    let op = document.getElementById('text-output');
    if(op.classList.contains('underline')){
      op.classList.remove('underline');
    }else{
      op.classList.add('underline');
    }
}


alignText = (elem, alignType) => {
  
  document.getElementById('text-output').style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName('align');
  
  for(let button of alignButtons){
    button.classList.remove('active');
  }

  elem.classList.add('active');
}
