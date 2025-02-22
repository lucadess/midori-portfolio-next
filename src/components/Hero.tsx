import Image from "next/image"
import mainHero from "../assets/images/main-hero.png"

export default function Hero(){
    return (
      <section className="home-hero-section">
        <div className="container flex">
          <Image className="home-hero-image" src={mainHero} alt="Midori Fuchs drinking a cup of coffee." />
          <div className="home-hero-text">
            <h1 className="home-hero-heading">hi, I am Midori</h1>
            <h2 className="home-hero-subheading">
              I make<br />
              art, and<br />
              stuff.
            </h2>
          </div>
          
        </div>
      </section>
    )
}