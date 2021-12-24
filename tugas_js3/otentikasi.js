function login() {
    let user = document.getElementById('username').value
    let pass = document.getElementById('password').value
    if (user == 'isep' && pass == 'Bismillah') {
        alert('Anda Berhasil Login')
        window.location = "berhasil_login.html"
    } else if (user == '' && pass == '') {
        alert('Username & Password Tidak Boleh Kosong')
    } else if (user == 'isep' && pass != 'Bismillah') {
        alert('Password yang anda masukan salah !!')
    } else if (user != 'isep' && pass == 'Bismillah') {
        alert('Username yang anda masukan salah !!')
    } else if (user != 'isep' && pass != 'Bismillah') {
        alert('Username & Password yang anda masukan salah !!')
    }
}