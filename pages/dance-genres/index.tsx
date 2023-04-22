import Footer from "@/components/Footer"
import Header from "@/components/Header"

import Image from 'next/image'

export default function Schedule() {


    return (
        <>

            <Header/>
            <section className="banner section" style={{ minHeight: "80vh", height: "auto" }}>
                <div className="">
                    <div className="is-size-5">
                        <p className="has-text-weight-bold py-3 is-size-2">
                            SPRING SCHEDULE
                        </p>
                    </div>
                </div>

                <Image src='/img/2023-spring-schedule.jpg' alt='' width={600} height={500}></Image>
               

            </section>

            <Footer />
        </>
    )
}

