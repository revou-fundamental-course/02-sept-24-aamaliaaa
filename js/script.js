//ini js

// Function to show the Triangle section
function showTriangle() {
    document.getElementById('triangleContent').style.display = 'flex';
    document.getElementById('parallelogramContent').style.display = 'none';
}

// Function to show the Parallelogram section
function showParallelogram() {
    document.getElementById('triangleContent').style.display = 'none';
    document.getElementById('parallelogramContent').style.display = 'flex';
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showTriangle').addEventListener('click', showTriangle);
    document.getElementById('showParallelogram').addEventListener('click', showParallelogram);
    document.getElementById('resetButton').addEventListener('click', function() {
        console.log('Reset button clicked');
        reset();
    });
});


// Luas Segitiga
function hitungLuas() { 
    const alas = document.getElementById('panjang-alas').value;
    const tinggi = document.getElementById('tinggi').value;

    if (alas === '' || tinggi === '') {
        alert('Form masih kosong. Harap masukkan nilai!');
    } else if (alas > 0 && tinggi > 0) {
        const luas = 0.5 * alas * tinggi;
        document.getElementById('resultLuas').textContent = `Luas Segitiga adalah: ${luas}`;
    } else {
        document.getElementById('resultLuas').textContent = "Masukkan nilai alas dan tinggi yang valid!";
    }
}

// Keliling Segitiga
function hitungKeliling() {
    const sisi1 = document.getElementById('sisi1').value;
    const sisi2 = document.getElementById('sisi2').value;
    const sisi3 = document.getElementById('sisi3').value;

    if (sisi1 === '' || sisi2 === '' || sisi3 === '') {
        alert('Form masih kosong. Harap masukkan nilai!');
    } else if (sisi1 > 0 && sisi2 > 0 && sisi3 > 0) {
        const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
        document.getElementById('resultKeliling').textContent = `Keliling Segitiga adalah: ${keliling}`;
    } else {
        document.getElementById('resultKeliling').textContent = "Masukkan nilai sisi yang valid!";
    }
}

// Luas Jajargenjang
function Luas() {
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi2').value;

    if (alas === '' || tinggi === '') {
        alert('Form masih kosong. Harap masukkan nilai!');
    } else if (alas > 0 && tinggi > 0) {
        const luas = alas * tinggi;
        document.getElementById('resultLuas2').textContent = `Luas Jajargenjang adalah: ${luas}`;
    } else {
        document.getElementById('resultLuas2').textContent = 'Masukkan nilai alas dan tinggi yang valid.';
    }
}

// Keliling Jajargenjang
function Keliling() {
    const alas = document.getElementById('a').value;
    const sisiMiring = document.getElementById('b').value;

    if (alas === '' || sisiMiring === '') {
        alert('Form masih kosong. Harap masukkan nilai!');
    } else if (alas > 0 && sisiMiring > 0) {
        const keliling = 2 * (parseFloat(alas) + parseFloat(sisiMiring));
        document.getElementById('resultKeliling2').textContent = `Keliling Jajargenjang adalah: ${keliling}`;
    } else {
        document.getElementById('resultKeliling2').textContent = 'Masukkan nilai alas dan sisi miring yang valid.';
    }
}

// Reset semua form dan hasil
function reset() {
    // Clear input fields
    document.getElementById('panjang-alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi2').value = '';
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';

    // Clear result text
    document.getElementById('resultLuas').textContent = 'Luas Segitiga adalah:';
    document.getElementById('resultKeliling').textContent = 'Keliling Segitiga adalah:';
    document.getElementById('resultLuas2').textContent = 'Luas Jajargenjang adalah:';
    document.getElementById('resultKeliling2').textContent = 'Keliling Jajargenjang adalah:';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resetButton').addEventListener('click', function() {
        console.log('Reset button clicked');
        reset();
    });
});
