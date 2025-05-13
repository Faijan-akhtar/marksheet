import QRCode from 'react-qr-code';

const Qr = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan to View Student Result</h2>
      <QRCode
        value="svueduinresultmarksheetview20aa.netlify.app"// 🔗 Replace with your deployed link
        size={200}
      bgColor="transparent" // makes background transparent
      fgColor="#000000"     // QR code color
      includeMargin={false}
      level="H"
      />
    </div>
  );
};

export default Qr;
