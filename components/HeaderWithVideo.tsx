import { AutoComplete } from "antd"
import Link from "next/link"
import Image from 'next/image'

export default function Heaer(props: any) {

    const style = {
        position: 'absolute',
        zIndex: "1",
        top: 0,
        right: 0,
        width: 'auto',
        minHeight: '100vh',
        objectFit: 'cover',
        borderBottom: '0.4rem solid white'
    }

    return (
        <>
            <section className="banner section mobile-nav" style={{ position: 'relative'}}>
                
                <div className="columns p-3" style={{ position: 'relative', background: "rgba(0, 0, 0, 0)", zIndex: 2 }}>
                    <div className="column p-0 m-0">

                        <Link href="/">
                        <Image 
                        src="/img/icon-white.png"
                        width={100}
                        height={100}
                        alt=""
                        />
                        </Link>
                       
                    </div>
                    <div className="column">
                        <nav className="level is-mobile has-text-weight-bold">
                            <Link href="/register" className="level-item link">REGISTER </Link>
                            <Link href="/meet-the-team" className="level-item link">MEET THE TEAM </Link>
                            <Link href="/schedule" className="level-item link">SCHEDULE </Link>
                            <Link href="/about" className="level-item link">ABOUT</Link>
                            <Link href="/contact" className="level-item link">CONTACT</Link>
                        </nav>
                    </div>
                </div>


                    <video autoPlay muted loop id="myVideo" style={style as React.CSSProperties}>
                        <source src="/video/1. Holidays.mp4" type="video/mp4" />
                    </video>
                
            </section>
        </>
    )
}