document.getElementById('A1').addEventListener('click',function(){
    let seatMax = document.getElementById('seatMax');
    let seatMaxNum = parseInt(seatMax.innerText);
    if(seatMaxNum < 4){
        setGreen('A1');
        seatMaxNum = seatMaxNum + 1;
        setSeat('seatMax',seatMaxNum);
        const a1 = document.getElementById('A1');
    }
});

function setGreen(greenId){
    const newId = document.getElementById(greenId);
    newId.style.backgroundColor = 'green';
}

function setSeat(setId,newSeat){
    let a = document.getElementById(setId);
    a.innerText = newSeat;
}




