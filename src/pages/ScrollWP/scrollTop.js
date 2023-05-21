//__view.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const ScrollTopView = (props) => {
    const { onScroll, onVisbile, visible } = props

    if (typeof window === 'object') window.addEventListener('scroll', onVisbile)

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: 90,
                    right: 30,
                    zIndex: '100'
                }}>
                <button
                    className='btn btn-primary btn-wp btn-small btn-up'
                    onClick={onScroll}
                    style={{ display: visible ? 'inline-block' : 'none', borderRadius: 5 ,background:'#34B7F1 !important' }}>
                 <FontAwesomeIcon icon={faWhatsapp } />
                </button>
            </div>
        </>
    )
}

export default ScrollTopView
