    import linkedin from "../assets/linkedin.png"
    import ilan from "../assets/ilan.jpg"

    function Info(){
        return (
            <header>
            <div className="info--main">
            
                <img className="info--profilepic"  src={ilan} alt = "profile Pic" height="200px" width="" />
                <h1 className="info--header">Ilanchezhian </h1>

                <p >Frontend Developer</p>

                <a className="info--portfolio" href="https://ilanchezhian-m.github.io/portfolioweb/">Portfolio Website</a> <br />

                <a href="https://twitter.com/ilanchezhian27">
                <button className="twitter-button">Twitter</button></a>

                <a href="https://www.linkedin.com/in/ilanchezhian-m-hyhfgds">
                <button className="linkedin-button">
                    <img src={linkedin} alt="logo" style={{ verticalAlign: 'middle' }} />
                        LinkedIn
                </button>
                </a>

            </div>
            </header>
        
        );
    }

    export default Info