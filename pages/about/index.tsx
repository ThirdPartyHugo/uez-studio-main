import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { AutoComplete } from "antd"
import Link from "next/link"

export default function About() {

    return (
        <>
        <Header/>
            <section className="banner section">

                <div className="columns p-3">
                    <div className="column">

                        <div className="is-size-5">
                            <p className="has-text-weight-bold py-6 is-size-2">ABOUT US</p>
                            
                            <p className="py-2">
                                Urban-Element Zone is a Montreal based dance studio specializing in the instruction 
                                of Street & Commercial Dance Styles for over 20 years.
                            </p>

                            <p className="py-2">
                                Urban-Element’s roots were planted by its original co-founders in the year 1999, 
                                with the official opening of the first studio in 2003, housing some of the founding 
                                pillars & leaders of the Montreal Street Dance community today.
                            </p>

                            <p className="py-2">
                                UEZ offers Street Dance instruction from pure Beginner level to Elite, recreational 
                                or competitive training, from the age of 2yrs (Parent-Child classes), through 
                                Kids & Teens, to adult classes.

                            </p>
                            <p className="py-2">
                                UEZ also offers other branches of service to the community, such as:
                                Shut Up N Dance Street Dance Battles (2-3 annually)
                                UEZ End of Session Showcases (2 annually)
                                The Chosen Events : Street Dance meets Live Band & BeatBox (annual)
                                JOAT KidzBattle in guest collaboration with JOAT Festival (annual)
                                Pop-Up Workshops & Master Classes
                                Competitive Troupe Training & Street Dance Crews
                                Studio Rental for Private Classes, Personal Training, Rehearsal, Projects
                            </p>
                        </div>


                    </div>

                </div>


            </section>

            <Footer />
        </>
    )
}

