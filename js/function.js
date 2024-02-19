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




