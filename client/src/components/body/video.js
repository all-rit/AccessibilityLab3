import React from "react";

const Video = ({ link, title }) => {
    return (
        <div class="container">
            <section class="page-section" style={{ paddingBottom: "25px" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <br />
                            <br />
                            <h2 class="section-heading text-uppercase">
                                SCREENREADER LAB: VIDEO
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <div class="row">
                <h4>Here are some videos to aid in understanding the material.</h4>
            </div>
            <div class="row">
                <iframe
                    title="Audio Cues"
                    height="315"
                    width="500"
                    src="https://www.youtube.com/embed/1by5J7c5Vz4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
           </div>
            <div class="row">
                <p>Accessibility for Blind/Visually-Impaired Users</p>
            </div>
            <div class="row">
                <iframe
                    title="Audio Cues"
                    height="315"
                    width="500"
                    src="//www.youtube.com/embed/94swlF55tVc?"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
           </div>
           <div class="row">
                <p>How a blind developer uses accessibility features in Visual Studio</p>
            </div>
        </div>
    );
};

export default Video;
