import deviceMockup from '../public/images/desktop_device.webp'
import React, { useEffect, useRef, useState } from "react"

export default function SimpleWork({ title, size, addClass, placeholder, DesktopAlt, DesktopTitle, PosterAlt, PosterTitle, description, uniqueID, Mp4 }) {
  
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)

  const callbackFunction = (entries) => {
    const [ every ] = entries
    setIsVisible(entry.IsInterecting) 
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .05
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if(containerRef.current) observer.disconnect(containerRef.current)
    
    return () => {
      if(containerRef.current) observer.disconnect(containerRef.current)
    }
  }, [containerRef, options])
   
  const createVideo = event => {
      if(event.currentTarget.id === uniqueID){
        let parent = document.querySelector('#'  + event.currentTarget.id + ' .gif_wrapper')
        let newVideo = document.createElement("video");
        newVideo.poster = placeholder
        newVideo.autoplay = true
        newVideo.loop = true
        newVideo.playsInline = true
        newVideo.muted = true
        newVideo.src = Mp4
        parent.appendChild(newVideo)
        event.currentTarget.id = 'videoCreated'
      }
    }


    if(Mp4){
    return (
                <div className="skills_card bg_white pc_box_shadow lazyVideo" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
                  <div className="skills_text_wrapper">
                    <div className="pc_row justify-spc-btwn">
                      <div id={uniqueID} className="work-wrapper" onMouseOver={createVideo}>
                        <img width="auto" height="auto" className="static-hover" src={deviceMockup.src} alt={DesktopAlt} title={DesktopTitle}></img>
                        <div className="static_wrapper">
                          <img width="auto" height="auto" className="static" src={placeholder} alt={PosterAlt} title={PosterTitle}></img>
                        </div>
                        <div  className="gif_wrapper">              
                        </div>
                      </div>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="box">Ovserve me</div>
                </div>
              )
    }else{
      return(
        <div className="skills_card bg_white pc_box_shadow noVideo" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
        <div className="skills_text_wrapper">
          <div className="pc_row justify-spc-btwn">
            <div className="work-wrapper">
                <img className="portfolio" width="410" height="200" src={placeholder} alt={PosterAlt} title={PosterTitle}></img>
            </div>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      )
    }
  }