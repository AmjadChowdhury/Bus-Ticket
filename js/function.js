document.getElementById('A1').addEventListener('click',function(){
    let seatMax = document.getElementById('seatMax');
    let seatMaxNum = parseInt(seatMax.innerText);
    if(seatMaxNum < 4){
        setGreen('A1');
        seatMaxNum = seatMaxNum + 1;
        setSeat('seatMax',seatMaxNum);
        let totalSeat = document.getElementById('totalMax');
        let totalMaxNum = parseInt(totalSeat.innerText);
        totalMaxNum = totalMaxNum - 1;
        setSeat('totalMax',totalMaxNum);
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
// Apply btn disabled to enable
document.getElementById('applyCoupunInput').addEventListener('keyup',function(){
    let a = document.getElementById('applyCoupunInput');
    let ans = a.value;
    let b = document.getElementById('applyCoupun');
    if(ans === 'NEW15' || ans === 'Couple20'){
        b.removeAttribute('disabled');
    }
    else{
        b.setAttribute('disabled',true);
    }
})

document.getElementById('applyCoupun').addEventListener('click',function(){
    const a = document.getElementById('applyDiv');
    a.style.display = 'none';
})



