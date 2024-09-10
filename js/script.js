//ini javascript

// script.js
function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (alas > 0 && tinggi > 0) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('resultLuas').textContent = `Luas Segitiga adalah: ${luas}`;
    } else {
        document.getElementById('resultLuas').textContent = "Masukkan nilai alas dan tinggi yang valid!";
    }
}
function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
        const keliling = sisi1 + sisi2 + sisi3;
        document.getElementById('resultKeliling').textContent = `Keliling Segitiga adalah: ${keliling}`;
    } else {
        document.getElementById('resultKeliling').textContent = "Masukkan nilai sisi yang valid!";
    }
}

function reset() {
    // Clear input fields
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';

    // Clear result texts
    document.getElementById('resultLuas').textContent = 'Luas Segitiga adalah:';
    document.getElementById('resultKeliling').textContent = 'Keliling Segitiga adalah:';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resetButton').addEventListener('click', function() {
        console.log('Reset button clicked');
        reset();
    });
});


