//__view.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
const ScrollTopView = (props) => {
    const { onScroll, onVisbile, visible } = props

    console.log(visible)
    console.log();
    if (typeof window === 'object') window.addEventListener('scroll', onVisbile)

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    zIndex: '100'
                }}>
                <button
                    className='btn btn-primary btn-small btn-up'
                    onClick={onScroll}
                    style={{ display: visible ? 'inline-block' : 'none', borderRadius: 5 }}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </button>
            </div>
        </>
    )
}

export default ScrollTopView
