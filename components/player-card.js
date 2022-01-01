import React, { useState, useEffect } from 'react';
import MatrixBG from "./matrix.js";

export default function PlayerCard() {
    useEffect(() => {
    }, []);

    return (
        <>
            <section className="player-card">
                <div className="card">
                    <header>
                        <MatrixBG selection={true} />
                        <a className="profile">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/rhmGrZQv.jpg" alt="Profile Image" />
                        </a>
                    </header>

                    <article>
                        <h1>Aaron Taylor</h1>
                        <h2>United Kingdom</h2>

                        <div className="info">
                            <div>
                                <span>2</span>
                                <span>Pens</span>
                            </div>

                            <div>
                                <span>12</span>
                                <span>Followers</span>
                            </div>

                            <div>
                                <span>34</span>
                                <span>Following</span>
                            </div>
                        </div>
                    </article>
                </div>

                <a className="codepen-logo" target="_blank" href="https://codepen.io/beanbaag">
                </a>
            </section>
        </>
    )
}