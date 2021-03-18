
function htmlTemplate(amount, name , date) {
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
      flex: 3;
      "
    >
      <div style="
        position: relative;
        margin: auto;
        text-align: center;
        background-color: white;
        padding: 50px;"
      >
        <h4 style="color:#1B263D;">Comprobante de Recarga<h6>
        <p style="color:#1B263D;">El usuario ${name} realizo un recarga de dinero el ${date}.</p>
        <h1 style="color:#1B263;">${amount} $</h1>
        <p style="color:#1B263D;"> Gracias por confiar en nosotros!</p>
      </div>
    </div>
  </body>
  `
}

module.exports = { htmlTemplate };
