import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
const WhatsappSticky = () => {

    return (
        <>
                    <Link href={`https://wa.me/+994774061010`}>
            <div
                style={{
                    position: 'fixed',
                    bottom: 90,
                    right: 30,
                    zIndex: '100'
                }}>
                   
                <button
                    className='btn btn-primary btn-wp btn-small btn-up'
                    >
                 <FontAwesomeIcon icon={faWhatsapp } />
                </button>
                 
            </div>
                </Link>
        </>
    )
}

export default WhatsappSticky
