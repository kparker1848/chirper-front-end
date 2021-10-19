import React, { useState } from 'react';
import { TiBrush, TiAt } from "react-icons/ti";

const App = () => {
    const [username, setUsername] = useState("");
    const [newChirp, setChirp] = useState("");
    const [chirpFeed, setFeed] = useState([
        {
            id: 1,
            user: "@Mothm@n:",
            chirp: "Getting lit tonight #porchlightparty"
        },
        {
            id: 2,
            user: "@NotBigfoot:",
            chirp: "Taking a vacation in the mountains for a month, nobody bother me."
        },
        {
            id: 3,
            user: "@Call-Me-Nessie:",
            chirp: "What a fun lake trip with the boys!"
        },
    ]);

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handleChirpChange = e => {
        setChirp(e.target.value);
    }

    function handleAddChirp() {
        const updateFeed = [
            ...chirpFeed,
            {
                id: chirpFeed.length + 1,
                user: "@" + username + ":",
                chirp: newChirp
            }
        ];
        setFeed(updateFeed);
    };

    const chirpToFeed = e => {
        e.preventDefault();
        handleAddChirp();
        setUsername("");
        setChirp("");
    };


    return (
        <>
            <h2 className="col-12 text-center mb-5">Welcome to Chirper</h2>
            <div className="d-flex flex-wrap justify-content-evenly container">
                <div className="shadow p-3 mb-5 bg-body rounded align-self-start col-4">
                    <form>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><TiAt /></span>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><TiBrush /></span>
                            <textarea className="form-control" placeholder="Your Thoughts..." aria-label="With textarea" value={newChirp} onChange={handleChirpChange}></textarea>
                        </div>
                        <button type="submit" onClick={chirpToFeed} className="btn btn-primary">Chirp It</button>
                    </form>
                </div>
                <div className="shadow p-3 mb-5 bg-body rounded col-5">
                    <ul>
                        {chirpFeed.map((chirps) => (

                            <div key={chirps.id} className="card">
                                <div className="card-body">
                                    <p className="card-title fw-bold">{chirps.user}</p>
                                    <p className="card-text">{chirps.chirp}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;
