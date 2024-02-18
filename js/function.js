document.getElementById('A1').addEventListener('click',function(){
    let self = document.getElementById('A1');
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
        self.setAttribute('disabled',true);

        setbiboronList('A1');
        totalBara();
    }
});

document.getElementById('A2').addEventListener('click',function(){
    let self = document.getElementById('A2');
    let seatMax = document.getElementById('seatMax');
    let seatMaxNum = parseInt(seatMax.innerText);
    if(seatMaxNum < 4){
        setGreen('A2');
        seatMaxNum = seatMaxNum + 1;
        setSeat('seatMax',seatMaxNum);
        let totalSeat = document.getElementById('totalMax');
        let totalMaxNum = parseInt(totalSeat.innerText);
        totalMaxNum = totalMaxNum - 1;
        setSeat('totalMax',totalMaxNum);
        self.setAttribute('disabled',true);

        setbiboronList('A2');
        totalBara();
    }
});

// btn green korbo...
function setGreen(greenId){
    const newId = document.getElementById(greenId);
    newId.style.backgroundColor = 'green';
}

// seat number check
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

// hide full apply btn div...
document.getElementById('applyCoupun').addEventListener('click',function(){
    const a = document.getElementById('applyDiv');
    a.style.display = 'none';
})

// biboron add korbo..
function setbiboronList(Id){
    let parent = document.getElementById('biboronList');
    let newChild = document.createElement('div');
    newChild.innerHTML = `
    <div class="flex justify-between">
        <p id="textDaoSeat">A1</p>
        <p>Economy</p>
        <p>550</p>
    </div>`
    parent.appendChild(newChild);
}

// total bara check..
function totalBara(){
    let seat = document.getElementById('seatMax');
    let seatNum = parseInt(seat.innerText);
    let result = seatNum * 550;

    let totalBara = document.getElementById('totalBara');
    totalBara.innerText = result;
}



