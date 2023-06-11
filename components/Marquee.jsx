import marqueeStyle from './Marquee.module.css'


export default function Marquee() {
  return (
    <div className={marqueeStyle.mytext}>
        <p className={marqueeStyle.parrafo}>
                Access to my <a href="https://humberto-asca-portfolio.netlify.app/" target='_blank'> portfolio </a>
                to know more about me...
            </p>
    </div>
  )
}
