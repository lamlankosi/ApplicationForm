document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idNumber = document.getElementById('idNumber').value;
    const resultDiv = document.querySelector('.result'); 
    resultDiv.innerHTML = '';

    if (idNumber.length !== 13 || isNaN(idNumber)) {
        resultDiv.innerHTML = '<p style="color: red;">Invalid ID number. It must be 13 digits long and numeric.</p>';
        return;
    }

    const day = idNumber.slice(0, 2);
    const month = idNumber.slice(2, 4);
    const year = idNumber.slice(4, 6);
    const genderCode = parseInt(idNumber.slice(6, 10), 10);
    const gender = genderCode >= 5000 ? 'Male' : 'Female';

    resultDiv.innerHTML = `
        <p><strong>Day/Month/Year:</strong> ${day}/${month}/${year}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;
});
