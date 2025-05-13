document.getElementById('hotelForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const room = document.getElementById('room').value;
  
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `✅ Thank you, ${name}! Your <strong>${room}</strong> room is booked from <strong>${checkin}</strong> to <strong>${checkout}</strong>.`;
    confirmation.classList.remove('hidden');
  
    this.reset();
  });
  