import { useState, useEffect } from "react";

const useScript = (src:any) => {
    // Keep track of script status ("idle", "loading", "ready", "error")
    const [status, setStatus] = useState(src ? "loading" : "idle");

    useEffect(
        () => {
            // Allow falsy src value if waiting on other data needed for
            // constructing the script URL passed to this hook.
            if (!src) {
                setStatus("idle");
                return;
            }

            // Fetch existing script element by src
            // It may have been added by another intance of this hook
            let script:any = document.querySelector(`script[src="${src}"]`);

            if (!script) {
                // Create script
                script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.setAttribute("data-status", "loading");
                // Add script to document body
                document.body.appendChild(script);

                // Store status in attribute on script
                // This can be read by other instances of this hook
                const setAttributeFromEvent = (event:any) => {
                    script.setAttribute(
                        "data-status",
                        event.type === "load" ? "ready" : "error"
                    );
                };

                script.addEventListener("load", setAttributeFromEvent);
                script.addEventListener("error", setAttributeFromEvent);
            } else {
                // Grab existing script status from attribute and set to state.
                setStatus(script.getAttribute("data-status"));
            }

            // Script event handler to update status in state
            // Note: Even if the script already exists we still need to add
            // event handlers to update the state for *this* hook instance.
            const setStateFromEvent = (event:any) => {
                setStatus(event.type === "load" ? "ready" : "error");
            };

            // Add event listeners
            script.addEventListener("load", setStateFromEvent);
            script.addEventListener("error", setStateFromEvent);

            // Remove event listeners on cleanup
            return () => {
                if (script) {
                    script.removeEventListener("load", setStateFromEvent);
                    script.removeEventListener("error", setStateFromEvent);
                }
            };
        },
        [src] // Only re-run effect if script src changes
    );

    return status;
}

const AdfitScript_FlowerHomeBottom = () => {
    useEffect(() => {
      const ins: any = document.createElement('ins')
      const script: any = document.createElement('script')

      ins.className = 'kakao_ad_area'
      ins.style = 'display:none'
      script.async = 'true'
      script.src = '//t1.daumcdn.net/kas/static/ba.min.js'
      script.type = 'text/javascript'
      ins.setAttribute('data-ad-unit', process.env.REACT_APP_ADFIT_FLOWERQUESTIONBOTTOM)
      ins.setAttribute('data-ad-width', 320)
      ins.setAttribute('data-ad-height', 50)

      document.querySelector('.bottomAdfit')?.appendChild(ins)
      document.querySelector('.bottomAdfit')?.appendChild(script)

    }, [])
}

const AdfitScript_FlowerQuestion = () => {
    const ins: any = document.createElement('ins')
    const script: any = document.createElement('script')

    ins.className = 'kakao_ad_area'
    ins.style = 'display:none'
    script.async = 'true'
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js'
    script.type = 'text/javascript'
    ins.setAttribute('data-ad-unit', process.env.REACT_APP_ADFIT_FLOWERHOMEBOTTOM)
    ins.setAttribute('data-ad-width', 320)
    ins.setAttribute('data-ad-height', 100)

    document.querySelector('.bottomAdfit')?.appendChild(ins)
    document.querySelector('.bottomAdfit')?.appendChild(script)
}

const AdfitScript_ResultCenter = () => {
  console.log('잘됨')
    const ins: any = document.createElement('ins')
    const script: any = document.createElement('script')

    ins.className = 'kakao_ad_area'
    ins.style = 'display:none'
    script.async = 'true'
    script.src = '//t1.daumcdn.net/kas/static/ba.min.js'
    script.type = 'text/javascript'
    ins.setAttribute('data-ad-unit', process.env.REACT_APP_ADFIT_RESULTCENTER)
    ins.setAttribute('data-ad-width', 320)
    ins.setAttribute('data-ad-height', 100)
    
    document.querySelector('.centerAdfit')?.appendChild(ins)
    document.querySelector('.centerAdfit')?.appendChild(script)

}

export { useScript, AdfitScript_FlowerHomeBottom, AdfitScript_FlowerQuestion, AdfitScript_ResultCenter };