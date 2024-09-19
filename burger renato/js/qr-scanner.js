function onScanSuccess(qrMessage) {
    console.log("Código QR: ", qrMessage);

    // Redirigir según el código QR escaneado
    if (qrMessage.includes('clasica')) {
        window.location.href = "clasica.html";
    } else if (qrMessage.includes('doble')) {
        window.location.href = "doble.html";
    } else if (qrMessage.includes('vegana')) {
        window.location.href = "vegana.html";
    } else {
        alert('Código QR no reconocido');
    }
}

function onScanError(errorMessage) {
    console.log("Error en el escaneo: ", errorMessage);
}

var qrScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
qrScanner.render(onScanSuccess, onScanError);
