import QRCode from 'react-qr-code';

const Qr = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan to View Student Result</h2>
      <QRCode
        value="svueduinresultmarksheet-set20a.netlify.app" // 🔗 Replace with your deployed link
        size={200}
        fgColor="#000000"
        bgColor="#ffffff"
        level="H"
      />
    </div>
  );
};

export default Qr;
