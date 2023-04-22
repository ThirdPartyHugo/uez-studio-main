import Footer from "@/components/Footer"
import Header from "@/components/Header"

import Image from 'next/image'

export default function Schedule() {


    return (
        <>

            <Header/>
            <section className="banner section has-text-centered" style={{ height: "auto" }}>
                
                <Image src='/img/2023-spring-schedule.jpg' alt='' width={600} height={500}></Image>
               

            </section>

            <Footer />
        </>
    )
}

