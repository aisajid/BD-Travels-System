// buy ticket scrolling:
const btnBuyTicket = document.getElementById('btn-buy-ticket');
btnBuyTicket.addEventListener('click', function () {
    document.getElementById('paribahan-section').scrollIntoView({
        behavior: 'smooth'
    })
})


let seatSelected = 0;


const seats = document.querySelectorAll('.seat');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        if (seat.classList.contains('bg-green-color')) {
            seat.classList.remove('text-white')
            seat.classList.remove('bg-green-color');
            seat.classList.add('bg-card-bg-color3')
            seat.classList.add('text-description-color5');
            seatSelected--;
            removePreviousCostSummary(seat);
        }
        else {
            if (seatSelected === 4) {
                return alert("You can't select more than 4 seats.");
            }
            else {
                // remove old styles
                seat.classList.remove('bg-card-bg-color3')
                seat.classList.remove('text-description-color5')
                // add new styles for select
                seat.classList.add('bg-green-color');
                seat.classList.add('text-white');
                seatSelected++;

                // seat left:
                const seatLeft = document.getElementById('seats-left');
                const seatHave = 40 - seatSelected;
                seatLeft.innerText = seatHave;
                showCostSummary(seat);
            }
        }
        const selectedSeatQuantityElement = document.getElementById('seat-selected');
        selectedSeatQuantityElement.innerText = seatSelected;
        setTotalPrice(seatSelected);
        removeDisableCouponApplyBtn(seatSelected);
        
    })
}

 setGrandTotal(seatSelected);
















// seat quantity:


