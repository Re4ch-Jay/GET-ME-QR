import React, { useEffect } from 'react'

const ADS = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
            console.log(e)
        }
    }, [])

  return (
    <div>
        <ins className = "adsbygoogle"
                style = { {display:"inline-block",width:"728px",height:"90px"} }
                data-ad-client = "ca-pub-7416316743343796"
                data-ad-slot="7135672846"
                data-ad-format="auto"
                data-full-width-responsive="true"
        ></ins>
    </div>
)
}

export default ADS