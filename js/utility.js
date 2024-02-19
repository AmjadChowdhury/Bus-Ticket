
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
    let inputDiv = document.getElementById('applyCoupunInput');
    const a = document.getElementById('applyDiv');
    a.style.display = 'none';

    let discountPrice = document.getElementById('discountPrice');
    let discountPriceNum = parseInt(discountPrice.innerText);

    let grandTotal = document.getElementById('grandTotal');
    let grandTotalNum = parseInt(grandTotal.innerText);

    if(inputDiv.value === 'NEW15'){
        discountPriceNum = (grandTotalNum * 15)/100;
    }
    else{
        discountPriceNum = (grandTotalNum * 20)/100;
    }
    discountPrice.innerText = discountPriceNum;
    grandTotalNum = grandTotalNum - discountPriceNum;
    grandTotal.innerText = grandTotalNum;
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

    let p = document.getElementById(Id);
    let pText = p.innerText;
    document.getElementById('textDaoSeat').innerText = pText;
}

// total bara check..
function totalBara(){
    let seat = document.getElementById('seatMax');
    let seatNum = parseInt(seat.innerText);
    let result = seatNum * 550;

    let totalBara = document.getElementById('totalBara');
    totalBara.innerText = result;

    let grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = result;
}