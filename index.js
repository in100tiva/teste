document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    const reservationsList = document.getElementById('reservations');

    // Carregar reservas existentes
    loadReservations();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addReservation();
    });

    function addReservation() {
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        const reservation = { name, date, time, guests };
        
        // Adicionar ao localStorage
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(reservation);
        localStorage.setItem('reservations', JSON.stringify(reservations));

        // Atualizar a lista na página
        displayReservation(reservation);

        // Limpar o formulário
        form.reset();
    }

    function loadReservations() {
        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.forEach(displayReservation);
    }

    function displayReservation(reservation) {
        const li = document.createElement('li');
        li.textContent = `${reservation.name} - Data: ${reservation.date}, Hora: ${reservation.time}, Convidados: ${reservation.guests}`;
        reservationsList.appendChild(li);
    }
});