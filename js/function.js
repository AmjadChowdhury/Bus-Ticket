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

document.getElementById('applyCoupunInput').addEventListener('keyup',function(){
    let a = document.getElementById('applyCoupunInput');
    let ans = a.value;
    if(ans === 'NEW15' || ans === 'Couple20'){
        let b = document.getElementById('applyCoupon');
        b.setAttribute('enabled',true)
    }
})



