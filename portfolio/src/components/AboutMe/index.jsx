import "./style.css";

const AboutMe = () => {
    return (
        <div className="container-about">
            <div className="text">
                <h1 className="title-text">{`Hi, I'm Emily July!`}</h1>
                <h3 className="subtitle-text">A full stack developer...</h3>
                <p className="content-text">
                    {`Let's get to know a little about me?`}
                </p>
            </div>
            <div className="photo">
                <div className="photo-card">
                    <img
                        src="/profile.jpg"
                        alt="Emily July"
                        className="photo-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
