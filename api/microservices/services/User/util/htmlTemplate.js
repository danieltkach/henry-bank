
function htmlTemplate(codeSecurity) {
  return `
  <body>
    <div style="
      color: black;
      text-align: center;
      background-color: #1B263D;
      padding: 50px;
      flex: 1;"
    >
      <div style="height: 50px">
        <img src="https://res.cloudinary.com/dcen68vrk/image/upload/v1614840097/WalletLogo_-_Inro_logo_xxaihg.png" alt="Wallet-Logo-Inro-logo" height="100%" border="0" />
      </div>
    </div>

    <div style="
      padding: 100px;
      background-color: #3551F2;
      justify-content: center;
      align-items: center;
      flex: 3;"
    >
      <div style="
        position: relative;
        margin: auto;
        text-align: center;
        background-color: white;
        padding: 50px;"
      >
        <p style="color:#1B263D;">Utiliza este codigo para activar tu cuenta de usuario en <b>Inro</b> y continuar con tu registro.</p>
        <h1 style="color:#1B263;D">${codeSecurity}</h1>
        <p style="color:#1B263D;">Este codigo expira en 10 minutos !.</p>
      </div>
    </div>
  </body>
  `
}

module.exports = { htmlTemplate };
