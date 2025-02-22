import Link from "next/link"
import HomeWorkCategory from "./HomeWorkCategory";

export default function HomeWork(){
    return (
        <section className="home-work">
            <div className="container flex items-center justify-center">
                <Link href="#">
                    <HomeWorkCategory>
                        <h3>Professional Projects</h3>
                    </HomeWorkCategory>
                </Link>
                <Link href="#">
                    <HomeWorkCategory>
                        <h3>Academic Projects</h3>
                    </HomeWorkCategory> 
                </Link>
                <Link href="#">
                    <HomeWorkCategory>
                        <h3>Personal Projects</h3>
                    </HomeWorkCategory>
                </Link>
            </div>
        </section>
        
    )
}