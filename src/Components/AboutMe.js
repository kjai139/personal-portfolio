import photoHolder from "./Assets/images/portrait1.webp"

const AboutMe = () => {



    return (
        <div className="about-me">
          
            <div className="about-me-img-div">
            <img className="about-me-img" src={photoHolder}>
            </img>
            </div>

            
            
            <div className="about-me-txt">
                <h1 className="card-heading">About me</h1>
                <p className="card-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        

        </div>
    )
}


export { AboutMe }