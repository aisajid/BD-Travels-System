function showCostSummary(element) {
    const costSummaryElement = document.getElementById('cost-summary');
    const seatNo = element.innerText;
    const seatClass = 'Economy';
    const seatPrice = 550;
    let div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center', 'py-2', 'text-heading-color6', 'text-lg', 'font-medium',);
    div.setAttribute('id', `card-${seatNo}`)

    let p1 = document.createElement('p');
    p1.innerText = seatNo;
    let p2 = document.createElement('p');
    p2.innerText = seatClass;
    let p3 = document.createElement('p');
    p3.innerText = seatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    costSummaryElement.appendChild(div);

}

function removePreviousCostSummary(element) {
    const seatNo = element.innerText;
    const costSummaryContainer = document.getElementById('cost-summary');
    const div = document.getElementById(`card-${seatNo}`);
    costSummaryContainer.removeChild(div);
}

function setTotalPrice(numOfSeat) {
    const total = 550 * numOfSeat;
    const priceElement = document.getElementById('total-price-element');
    priceElement.innerText = total;
}

function removeDisableCouponApplyBtn(seatSelected) {
    let couponButton = document.getElementById('btn-coupon-apply');
    if (seatSelected === 4) {
        couponButton.removeAttribute('disabled');
    }
    else {
        couponButton.setAttribute('disabled', true);

    }
}

function setGrandTotal() {
    const total = 550 * 4;
    const priceElement = document.getElementById('grand-total-element');
    const btn = document.getElementById('btn-coupon-apply');
    priceElement.innerText = total;
    const couponContainer = document.getElementById('Coupon-input-container-element');
    const p1 = document.createElement('p');
    p1.innerText = 'Discount Price';
    const p2 = document.createElement('p');


    btn.addEventListener('click', function () {
        const input = document.getElementById('coupon-input-element');
        const coupon = input.value;

        if (coupon === 'NeW15') {
            const calculateValue = parseInt(total * 15) / 100;
            p2.innerText = calculateValue;
            priceElement.innerText = total - calculateValue;
            couponContainer.classList.add('text-lg', 'font-medium', 'text-heading-color1');
            couponContainer.classList.remove('bg-white');
            couponContainer.classList.remove('p-2');

            couponContainer.removeChild(input);
            couponContainer.removeChild(btn);

            couponContainer.appendChild(p1);
            couponContainer.appendChild(p2);

        }
        else if (coupon === 'Couple 20') {
            const calculateValue2 = (total * 20) / 100;
            p2.innerText = calculateValue2;
            priceElement.innerText = total - calculateValue2;
            couponContainer.classList.add('text-lg', 'font-medium', 'text-heading-color1');
            couponContainer.classList.remove('bg-white');
            couponContainer.classList.remove('p-2');


            couponContainer.removeChild(input);
            couponContainer.removeChild(btn);

            couponContainer.appendChild(p1);
            couponContainer.appendChild(p2);
        }
        else {
            return alert("Invalid coupon");
        }

    })

}



function nexBtnHandler(seatSelected){
    const phoneNumInput = document.getElementById('phone-number-input');
const nextBtn = document.getElementById('next-btn');

if((seatSelected > 0) && (phoneNumInput.value.length === 11)){
     nextBtn.removeAttribute('disabled');
}
else{
    nextBtn.setAttribute('disabled', true);
}
}