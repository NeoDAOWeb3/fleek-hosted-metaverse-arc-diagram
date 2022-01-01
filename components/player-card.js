import React, { useState, useEffect } from 'react';
import MatrixBG from "./matrix.js";
import Draggable from 'react-draggable';

export default function PlayerCard() {
    useEffect(() => {
    }, []);

    return (
        <>
            <Draggable>
                <section className="player-card">
                    <div className="card">
                        <header>
                            <MatrixBG selection={true} />
                            <a className="profile">
                                <img src="https://pbs.twimg.com/profile_images/1473767216051101696/-9w64Qvd_400x400.jpg" alt="Profile Image" />
                            </a>
                        </header>

                        <article>
                            <h1>Jon Senterfitt</h1>
                            <h2>Dallas, TX</h2>

                            <div className="info">
                                <div>
                                    <span>2</span>
                                    <span>Wallets</span>
                                </div>

                                <div>
                                    <span>12</span>
                                    <span>Metaverses</span>
                                </div>

                                <div>
                                    <span>1.2K</span>
                                    <span>Assets</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <a href="" className="button">Make small</a>
                </section>
            </Draggable>
        </>
    )
}