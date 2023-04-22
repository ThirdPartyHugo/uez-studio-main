import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Register() {

    useEffect(() => {

    }, [])




    return (
        <>
            <Header />
            <Head>
                <script src="https://www.amilia.com/scripts/amilia-iframe.js" type="text/javascript"></script>
            </Head>


            <section className="banner section has-text-centered" style={{ height: "80vh" }}>

                <div id="amilia">
                    <div id="amilia"><iframe id="amilia-iframe" allowtransparency="true" frameborder="0" width="100%" style="width:100%!important; border:none!important; overflow:hidden!important; visibility:hidden;" scrolling="no" horizontalscrolling="no" verticalscrolling="no" data-color-code="#2B91E1" src="https://www.amilia.com/store/en/urbanelementzone/shop/programs"></iframe><script src="https://www.amilia.com/scripts/amilia-iframe.js" type="text/javascript"></script></div>
                </div>


            </section>
            <Footer />
        </>

    )
}