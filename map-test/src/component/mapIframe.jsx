import {useEffect, useRef} from "react";

function MapIframe() {
    const map_url = "/Map/?baseMap=Config/SXDLDL/SXDLDL&dataShow=Config/SXDLDL/SXDLDL&hidecontrol=navpanel,latlng,q1,q2,q3,q4"
    const mapRef = useRef(null);
    useEffect(() => {
        mapRef.current.onload = mapRef.current.onreadystatechange = function () {
            if (this.readyState && this.readyState !== 'complete') return
            else {
                console.log(mapRef.current.contentWindow) // 在iframe加载周期完成之后获取其本身contentWindow实例
            }
        }
    }, [])
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <iframe
                ref={(ref) => {
                    mapRef.current = ref;
                }}
                src={map_url}
                style={{width: '100vw', height: '100vh'}}
            />
        </div>
    )
}

export default MapIframe