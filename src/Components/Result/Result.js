import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode';
import { useLocation } from 'react-router-dom';

function Result() {
  const location=useLocation();
  const input=location.state?.input || '';
  const [qrUrl,setQrUrl]=useState('');

  useEffect(()=>{
    if(input){
        QRCode.toDataURL(input)
        .then(setQrUrl)
        .catch(console.error);
    }
  },[input]);
  const handleShare=async()=>{
    try{
        const blob=await(await fetch(qrUrl)).blob();
        const file=new File([blob],'qrcode.png',{type:blob.type});

        if(navigator.canShare && navigator.canShare({files:[file]})){
            await navigator.share({
                files:[file],
                title:'QR Code',
                text:'Here is the QR Code. Scan it if you may',
            });
        }else{
            alert('Sharing not supported on this device.');
        }
    }
    catch(error){
        console.error('Error Sharing: ', error);
    }
  }

  return (
    <div>
        <h2>Generated QR Code</h2>
        {qrUrl ? (
        <div>
            <img src={qrUrl} alt='QR Code'/>
            <br/>
            <a href={qrUrl} download="qrcode.png">
                <button class='btn btn-primary'>Download QR Code</button>
            </a>
            <br/>
                <button onClick={handleShare} class="btn btn-dark">Share QR Code</button>
        </div>)
        :(<p>No input provided.</p>)}
    </div>
  )
}

export default Result