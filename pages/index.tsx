import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import HeaderWithVideo from '@/components/HeaderWithVideo';


interface LinkedListNode{
    data: string;
    next: LinkedListNode | null
}
function constructCircularLinkedList(arr: string[]){
    const head: LinkedListNode = {data: arr[0], next: null}
    if(arr.length>1){
        var currNode = head; 
        arr.slice(1).forEach((element) => {
            currNode.next = {data: element, next: null}
            currNode = currNode.next;
        });

        currNode.next = head; 
    }

    return head;
}
export default function Index() {

    const [currentImg, setCurrentImg] = useState("/img/A7H02603-modified.jpeg")
    const imgsArr = ["/img/A7H02728.jpeg", "/img/A7H02603-modified.jpeg"]

    var currImgNode = constructCircularLinkedList(imgsArr)

      useEffect(() => {
        const interval = setInterval(function() {
            setCurrentImg(currImgNode.data);
            currImgNode = currImgNode.next as LinkedListNode;
          }, 
          3000
        )
          
        
      }, []);

    

    return (
        <>

        <HeaderWithVideo/>
            
            <section className="section section-home pb-0 banner">
                <div className='columns is-vcentered has-text-centered' style={{ height: '100%' }}>
                    <div className='column'>
                        <p className='stylized'>GET IN THE ZONE </p>

                        <Link href='about'><button className="more-about-us-button">MORE ABOUT US →</button></Link>
                    </div>
                </div>
            </section>

            <section className="section section-home pl-0 py-0 banner">
                <div className="columns">
                    <div className="column has-text-centered right-border" style={{backgroundImage:`url(${currentImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", transition: "background-image 2s"}}>
                        <div className="columns is-vcentered">
                            <div className='column'>
                                <p className="stylized-medium">DANCE GENRES</p>
                            </div>
                        </div>
                    </div>
                    <div className="column ">
                        <div className="columns is-vcentered">
                            <div className='column text-info'>
                                <p className="info-title">DANCE GENRES</p>
                                <p className="info-text">
                                    At UEZ, we have several different dance styles related to  street
                                    dance and commercial dance.
                                </p>

                                <Link href='dance-genres'><button className="more-about-us-button">READ MORE →</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-home pl-0 py-0 banner">
                <div className="columns">
                    <div className="column right-border">
                        <div className="columns has-text-centered is-vcentered">
                            <div className='column'>
                                <p className="stylized-medium">SCHEDULE</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">

                        <div className="columns is-vcentered">
                            <div className='column text-info'>
                                <p className="info-title">SCHEDULE</p>
                                <p className="info-text">
                                    We offer a 14-week fall schedule with many different plan options, from drop-in classes to Beastmode plan with illimited sessions!
                                </p>
                                <Link className="more-about-us-button" href="schedule">READ MORE →</Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

           

            <Footer/>
        </>
    )
}

