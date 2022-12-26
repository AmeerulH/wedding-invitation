/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from 'react'
import Angry from '../../assets/images/angry.jpg';
import ChicaBonita from '../../assets/images/chica-bonita.jpeg'
import Engagement from '../../assets/images/engagement.jpg'
import EngagementSmile from '../../assets/images/engagement_smile.jpeg'
import Hill from '../../assets/images/hill.jpeg'
import Icn1 from '../../assets/images/icn-1.jpeg'
import Kool from '../../assets/images/kool.jpeg'
import Mirror from '../../assets/images/mirror.jpg'
import MumsWedding from '../../assets/images/mums_wedding.jpg'
import NightsOfFrights from '../../assets/images/nights_of_frights.jpg'
import Roller from '../../assets/images/roller.jpg';
import Tea from '../../assets/images/tea.jpg'
import Together from '../../assets/images/together.jpeg'
import './photos-page.css'

const PhotosPage = () => {
    useEffect(() => {
        const track = document.getElementById("image-track") as any;

        const handleOnDown = (e: any)=> track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = (e: any) => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }

        const handleOnMove = (e: any) => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of track.getElementsByClassName("image")) {
                image.animate({
                    objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }
        window.onmousedown = e => handleOnDown(e);
        window.ontouchstart = e => handleOnDown(e.touches[0]);
        window.onmouseup = e => handleOnUp(e);
        window.ontouchend = e => handleOnUp(e.touches[0]);
        window.onmousemove = e => handleOnMove(e);
        window.ontouchmove = e => handleOnMove(e.touches[0]);
    }, [])

    return (
        <div className='photos-page'>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0"
                data-aos='zoom-in'
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >
                <img className="image" src={Roller} draggable="false" />
                <img className="image" src={Engagement} draggable="false" />
                <img className="image" src={EngagementSmile} draggable="false" />
                <img className="image" src={Hill} draggable="false" />
                <img className="image" src={Together} draggable="false" />
                <img className="image" src={Kool} draggable="false" />
                <img className="image" src={Icn1} draggable="false" />
                <img className="image" src={Angry} draggable="false" />
                <img className="image" src={Mirror} draggable="false" />
                <img className="image" src={NightsOfFrights} draggable="false" />
                <img className="image" src={Tea} draggable="false" />
                <img className="image" src={MumsWedding} draggable="false" />
                <img className="image" src={ChicaBonita} draggable="false" />
            </div>
        </div>
    )
}

export default PhotosPage