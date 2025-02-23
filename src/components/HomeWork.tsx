import Link from "next/link"
import Image from "next/image"
import HomeWorkCategory from "./HomeWorkCategory";
import academicIcon from "../assets/images/academic-icon.png"
import personalIcon from "../assets/images/personal-icon.png"
import workIcon from "../assets/images/work-icon.png"

export default function HomeWork(){
    return (
        <section className="home-work">
            <div className="container flex items-center justify-center">
                <Link href="/work/academic">
                    <HomeWorkCategory>
                        <Image className="home-work-img" src={academicIcon} alt="A black cat wearing a cravat around his neck" />
                        <h3>Academic Projects</h3>
                    </HomeWorkCategory>
                </Link>
                <Link href="/work/personal">
                    <HomeWorkCategory>
                        <Image className="home-work-img" src={personalIcon} alt="A black cat wearing a pink bowtie around his neck" />
                        <h3>Personal Projects</h3>
                    </HomeWorkCategory> 
                </Link>
                <Link href="/work/professional">
                    <HomeWorkCategory>
                        <Image className="home-work-img" src={workIcon} alt="A black cat wearing swimming goggles and inflatable armbands with rubber ducks on it" />
                        <h3>Professional Projects</h3>
                    </HomeWorkCategory>
                </Link>
            </div>
        </section>
        
    )
}