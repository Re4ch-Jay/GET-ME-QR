import { useState } from "react";
import QRCode from "react-qr-code";
import Button from "./Button";
import ButtonDownload from "./ButtonDownload";
import Card from "./Card";
import Container from "./Container";
import {CirclePicker } from 'react-color'

function QRCodeComp() {
    const [src, setSrc] = useState('')
    const [size, setSize] = useState(300);
    const [error, setError] = useState('')
    const [bgcolor, setBgColor] = useState('#FFF')
    const [fgcolor, setFgColor] = useState('#000')
    
  
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
    <Container>
        <div className="grid place-items-center p-8 bg-white">
        {src && (
            <QRCode
                id="QRCode" 
                value={src}
                bgColor={bgcolor ? bgcolor : '#FFFFFF'}
                fgColor={fgcolor ? fgcolor : "#000000"}
                style={{ height: "auto", maxWidth: size, width: size }}
            />
        ) }
        {!src && 
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
            <div className="p-10" id="get-started">
                {error && <div className="mb-5 text-xs text-red-600 text-red-400">{error}</div>}
                    <p className="mb-10 text-white font-bold">Your Input</p>
                    <input type="url" onChange={e => setSrc(e.target.value)} 
                        className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="GetMeQR.com"
                    />
                    
                    <p className="text-white font-bold">Background Color</p>

                    <input type="text" onChange={e => setBgColor(e.target.value)} value={bgcolor}
                    className="my-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="#FFFFFF default color"
                    />

                    <CirclePicker  color={bgcolor} onChange={updatedColor => setBgColor(updatedColor.hex)} />

                    <p className="mt-10 text-white font-bold">Dots Color</p>

                    <input type="text" onChange={e => setFgColor(e.target.value)} value={fgcolor}
                    className="my-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="#000000 default color" 
                    />

                    <CirclePicker  color={fgcolor} onChange={updatedColor => setFgColor(updatedColor.hex)} />

                    <select id="size" onChange={e => setSize(e.target.value)} 
                        className="mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="300">Size: 300px x 300px</option>
                        <option value="400">Size: 400px x 400px</option>
                        <option value="500">Size: 500px x 500px</option>
                    </select>

                {src ?
                (
                <div className="flex justify-center items-center">
                    <ButtonDownload onImageDownload={onImageDownload} type={"png"} value={'Download PNG'} />

                    <ButtonDownload onImageDownload={onImageDownload} type={"jpeg"} value={'Download JPEG'} />
                </div>
                ) :
                    <li className="flex items-center max-w-md space-y-1 text-gray-500 list-inside text-gray-400 mt-10">
                        <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                        Input at least a character to download
                    </li>
                }
            </div>
        </Card>
        </div>
    </Container>
  )
}

export default QRCodeComp