import React from "react";
import "../assets/styles/Profile.scss";
import Post from '../Components/Post'
import CoverPhoto from "../assets/static/fondo-login.jpg";
import me from "../assets/static/me.jpg";
import im1 from "../assets/static/compu.jpg";
import im2 from "../assets/static/compu2.jpg";
import im3 from "../assets/static/compu3.jpg";
function Profile() {
  return (
    <div className="container-profile">
      <div className="hero-profile">
        <figure className="hero-profile__figure">
          <img src={me} alt="" />
        </figure>
        <div className="hero-profile__info">
          <h1>aleaxnder.serrano86</h1>
          <div className="info-suscription">
            <div className="info-suscription__item">
              <strong>108</strong>
              <span>publicaciones</span>
            </div>
            <div className="info-suscription__item">
              <strong>302</strong>
              <span>seguidores</span>
            </div>
            <div className="info-suscription__item">
              <strong> 15</strong>
              <span>seguidos</span>
            </div>
          </div>
          <strong className="info-name">Alexander Serrano</strong>
          <p className="info-description">
            I'm the whole damn cake and the cherry on top
          </p>
        </div>
      </div>
      <hr className="hr-profile" />
      <div className="grid-post">
        <Post img={im1}/>
        <Post img={im2}/>
        <Post img={im3}/>
        <Post img={im1}/>
        <Post img={im2}/>
        <Post img={im3}/>
        <Post img={im1}/>
        <Post img={im2}/>
        <Post img={im3}/>
      </div>
    </div>
  );
}

export default Profile;
