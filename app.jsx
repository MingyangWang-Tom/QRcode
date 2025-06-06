function QRCodeGenerator() {
  const [url, setUrl] = React.useState('');
  const [imgSrc, setImgSrc] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    try {
      const dataUrl = await QRCode.toDataURL(url.trim());
      setImgSrc(dataUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={e => setUrl(e.target.value)} required />
        </label>
        <button type="submit">Generate</button>
      </form>
      {imgSrc && (
        <div>
          <h2>Generated QR Code:</h2>
          <img src={imgSrc} alt="QR Code" />
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<QRCodeGenerator />);
