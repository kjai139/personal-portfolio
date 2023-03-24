import websiteCloneImg from "./Assets/images/project-covers/website-clone.png"
import findingWaldoImg from "./Assets/images/project-covers/finding-waldo.png"
import valoStoreImg from "./Assets/images/project-covers/valorant-store.png"
import todoImg from "./Assets/images/project-covers/to-do-list.png"
import cvProjImg from "./Assets/images/project-covers/cv-proj.png"
import battleshipImg from "./Assets/images/project-covers/battleship-cover.png"

import githubIcon from "./Assets/images/icons/github.icon.svg"
import openNewIcon from "./Assets/images/icons/open-in-new.svg"


const MyWork = () => {

    const workGallery = [
        {
            projName: 'Website Clone',
            imgUrl: websiteCloneImg,
            shortDesc: 'An instagram clone built with React and firebase with openAI image generation'

        },
        {
            projName: 'Finding Not Waldo',
            imgUrl: findingWaldoImg,
            shortDesc: 'A finding waldo type of mini game built with React and firebase'
        },
        {
            projName: 'Valorant Store',
            imgUrl: valoStoreImg,
            shortDesc: 'A simple online store made with React and Riot Games API'

        },
        {
            projName: 'To-do list',
            imgUrl: todoImg,
            shortDesc: 'Basic to-do-list app built with npm/raw html/js/css'

        },
        {
            projName: 'CV Project',
            imgUrl: cvProjImg,
            shortDesc: 'Curriculum Vitae app built with React'

        },
        {
            projName: 'Battleship',
            imgUrl: battleshipImg,
            shortDesc: 'A basic battleship game made with raw html/js/css'
        },

    ]

    const renderGallery = () => {
        return workGallery.map(value => 
            <div className="gridblock-container">
                <img className="gridblock-img" src={value.imgUrl} alt="project screenshot"></img>
                <div className="gridblock-desc">
                    <div className="desc-top">
                        <span><h4 className="desc-header">{value.projName}</h4></span>
                        <div>
                            <button className="gridblock-btns" style={{
                                backgroundImage:`url${githubIcon}`
                            }}></button>
                            <button className="gridblock-btns" style={{
                                backgroundImage:`url${openNewIcon}`
                            }}></button>
                        </div>
                    </div>
                    <div className="desc-bot">
                        <p className="card-desc">{value.shortDesc}</p>

                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="my-work">
            <h2 className="work-header">My work</h2>
            <div className="my-work-grid">
            {renderGallery()}
            </div>
        </div>
    )
}


export { MyWork }