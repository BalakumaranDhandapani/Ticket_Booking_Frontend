import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function Footer() {
    return (
        <div className="social-media">
            <a href="#" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size={"2x"} />
            </a>
            <a href="#" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size={"2x"} />
            </a>
            <a href="#" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size={"2x"} />
            </a>
            <a href="#" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size={"2x"} />
            </a>
        </div>
    )
}

export default Footer