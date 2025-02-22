"use client";

import Image from "next/image"
import React from "react"
import midoriAvatar from "../assets/images/midori-avatar.jpg"
import misoBefore from "../assets/images/miso-before.png"
import misoAfter from "../assets/images/miso-after.png"
import bowlBefore from "../assets/images/bowl-before.png"
import bowlAfter from "../assets/images/bowl-after.png"

export default function HomeAbout(){
    const [isFed, setIsFed] = React.useState(false)

    function feedMiso(){
        console.log(isFed)
        if (!isFed){
            setIsFed(prevIsFed => !prevIsFed)
        }
    }

    return(
        <section className="home-about">
            <div className="container flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h2>About me</h2>
                    <Image className="home-about-avatar" src={midoriAvatar} alt="A picture of Midori Fuchs smiling in the camera" />
                </div>
                <div className="home-about-text">
                    <p>
                      Born in the heart of Berlin, I was lucky enough to be raised by two creative powerhouses who taught me the value of hard work and imagination. Growing up bilingual, I developed a knack for seeing the world from different angles—a skill that comes in handy whether I&apos;m making art or just trying to navigate through life.
                    </p>
                    <p>
                      Most of the time I am <strong>trying to get rid of that itch in my brain </ strong>for which the only cure seems to be making and creating art. Preferably in all shapes and forms. Whether it&apos;s painting, digital design, or any other creative outlet. <strong>Creativity isn&apos;t just a hobby;</strong> it&apos;s how I stay sane in a world that never stops moving. Which actually also makes me a firm  believer in never standing still. I strive to expand my skill set constantly—whether it&apos;s to stave off boredom or to push my own limits.
                    </p>
                    <p>
                      After a busy stretch of creativity, I recharge by curling up with a good book, sipping on a cup of my latest home brew, and enjoying the company of my cat, Miso, cozied up on my lap.
                    </p>
                </div>
                    <div className="flex home-about-miso-container justify-center">
                        <div className="flex home-about-feeding">
                            <Image className="home-about-miso" src={isFed ? misoAfter : misoBefore} alt="A picture of a black cat called Miso, wearing brigth pink and orange cowboy boots" />
                        </div>
                        <div className="flex flex-col justify-between home-about-feeding">
                            <p className="justify-self-start">While I have you here, would you mind feeding Miso for me? Just click his food bowl!</p>
                            <Image className="home-about-bowl" src={isFed ? bowlAfter : bowlBefore} alt="An empty food bowl with the name Miso on it" onClick={feedMiso}/>
                        </div>
                    </div>
                </div>
                

        </section>
    )
}