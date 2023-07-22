import Image from 'next/image'
import classes from './hero.module.css'
function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/darshil.png" alt="An image showing Darshil" width={300} height={300}/>
            </div>
            <h1>Hey, I am Darshil</h1>
            <p>I post about programming and web development.</p>
        </section>
    )
}

export default Hero