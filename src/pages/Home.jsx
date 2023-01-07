import { useState } from "react";
import QRCode from "react-qr-code";
import ButtonDownload from "../components/ButtonDownload";
import Card from "../components/Card";
import Container from "../components/Container";
import Hero from "../components/Hero";

const Home = () => {
    const [src, setSrc] = useState('')
    const [generateQr, setGenerateQr] = useState(false)
    const [size, setSize] = useState(300);
    const [error, setError] = useState('')
    const [bgcolor, setBgColor] = useState('')
    const [fgcolor, setFgColor] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault()
      setError('')
      if(src) {
        setGenerateQr(true)
      }else{
        setError('Please input your url something')
        setGenerateQr(false)
      } 
    }
  
    const onImageDownload = (fileType) => {
      const svg = document.getElementById("QRCode");
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const file = canvas.toDataURL("image/"+fileType);
        const downloadLink = document.createElement("a");
        downloadLink.download = "GetMeQR_"+src;
        downloadLink.href = `${file}`;
        downloadLink.click();
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };
    
    return (
      <>
        <Hero />
        <Container>
            <div className="grid place-items-center p-8 bg-white">
            {generateQr && (
                <QRCode
                    id="QRCode" 
                    value={src}
                    bgColor={bgcolor ? bgcolor : '#FFFFFF'}
                    fgColor={fgcolor ? fgcolor : "#000000"}
                    style={{ height: "auto", maxWidth: size, width: size }}
                />
            ) }
            {!generateQr && 
            <QRCode
                id="QRCode" 
                value="codewithreach.vercel.app"
                bgColor={bgcolor ? bgcolor : '#FFFFFF'}
                fgColor={fgcolor ? fgcolor : "#000000"}
                style={{ height: "auto", maxWidth: size, width: size }}
                />}
                <p></p>
            </div>
            <div className="flex items-center justify-center">
            <Card>
                <form onSubmit={handleSubmit} className="mb-20">
                {error && <div className="mb-5 text-xs text-red-600 dark:text-red-400">{error}</div>}
                <input type="text" onChange={e => setSrc(e.target.value)} 
                    className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="GetMeQR.com"
                />

                    <input type="text" onChange={e => setBgColor(e.target.value)} 
                    className="my-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="#FFFFFF default color"
                    />
                    <input type="text" onChange={e => setFgColor(e.target.value)} 
                    className="my-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="#000000 default color" 
                    />

                    <select id="size" onChange={e => setSize(e.target.value)} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="300">Size: 300px x 300px</option>
                        <option value="400">Size: 400px x 400px</option>
                        <option value="500">Size: 500px x 500px</option>
                    </select>

                {generateQr ?
                (
                  <>
                    
                    <ButtonDownload onImageDownload={onImageDownload} type={"png"} value={'Download PNG'} />

                    <ButtonDownload onImageDownload={onImageDownload} type={"jpeg"} value={'Download JPEG'} />
                  </>
                ) :
                  <button type="button" className="mt-16 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" disabled>Disabled Download</button>
                }
                  
                  <button type="submit" class="text-white mt-16 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Generate</button>
                </form>
            </Card>
            </div>
        </Container>
      </>
    )
  
}

export default Home;
