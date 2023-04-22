import Link from "next/link"
import Image from 'next/image'

export default function Footer() {

    const copyRightLinksStyle = {
        borderTop: "2px solid black"
    }
    return (
        <>
         <section className="section has-text-weight-bold">
                <div className="columns is-mobile">
                    <div className="column">
                        <p className="footer-title pb-2">CLASSES</p>
                        <p>Schedule</p>
                        <p>Plan Options</p>
                    </div>
                    <div className="column">
                        <p className="footer-title pb-2">ABOUT US</p>
                        <p>Dance Genres</p>
                        <p>Contact US</p>
                    </div>
                    <div className="column has-text-right">
                    <Image 
                        src="/img/icon-black.png"
                        width={200}
                        height={200}
                        alt=""
                        />
                    </div>
                </div>
            </section>
        <section className="has-text-weight-bold" style={copyRightLinksStyle}>
                <div className="columns p-3 is-mobile">
                    <div className="column">
                        <p>
                            © 2022 Copyright
                        </p>
                    </div>
                    <div className="column">
                        <nav className="level is-mobile">
                            
                            <p className="level-item">Instagram</p>
                            <Link style={{color: 'black'}} href="https://www.facebook.com/UrbanElementZone/"><p className="level-item">Facebook</p></Link>
                            <p className="level-item">YouTube</p>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    )
}