import { useOverlay } from "./account/OverlayContext"



const ScreenDimmer = () => {

    const { isOverlayOpen } = useOverlay();

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-zinc-600 opacity-35
            transition-opacity duration-500
            ${isOverlayOpen ? '' : 'hidden' }`} /> 
    )
}

export default ScreenDimmer