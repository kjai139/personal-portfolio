import websiteCloneImg from "./Assets/images/project-covers/website-clone.png"
import findingWaldoImg from "./Assets/images/project-covers/finding-waldo.png"
import valoStoreImg from "./Assets/images/project-covers/valorant-store.png"
import todoImg from "./Assets/images/project-covers/to-do-list.png"
import cvProjImg from "./Assets/images/project-covers/cv-proj.png"
import battleshipImg from "./Assets/images/project-covers/battleship-cover.png"

import randomImg from "./Assets/images/project-covers/random-img.jpg"
import openNewIcon from "./Assets/images/icons/open-in-new.svg"


const MyWork = () => {

    const workGallery = [
        {
            projName: 'Website Clone',
            imgUrl: websiteCloneImg,
            shortDesc: 'An instagram clone built with React and firebase with openAI image generation',
            uuid: 'c83dc990-fe22-4515-907c-cd5868b78024'

        },
        {
            projName: 'Finding Not Waldo',
            imgUrl: findingWaldoImg,
            shortDesc: 'A finding waldo type of mini game built with React and firebase',
            uuid: '8e692bb3-85e0-4ed9-80d5-35470ea64ee6'
        },
        {
            projName: 'Valorant Store',
            imgUrl: valoStoreImg,
            shortDesc: 'A simple online store made with React and Riot Games API',
            uuid: '558cb302-2557-4326-96df-2fe54e299e7e'

        },
        {
            projName: 'To-do list',
            imgUrl: todoImg,
            shortDesc: 'Basic to-do-list app built with npm/raw html/js/css',
            uuid: '681b86ef-e1f2-41cd-80ce-eca892cee1ce'

        },
        {
            projName: 'CV Project',
            imgUrl: cvProjImg,
            shortDesc: 'Curriculum Vitae app built with React',
            uuid: '8a5571a3-1e4c-40a4-a8d0-453148acbc2d'

        },
        {
            projName: 'Battleship',
            imgUrl: battleshipImg,
            shortDesc: 'A basic battleship game made with raw html/js/css',
            uuid: '3499ed2a-404c-45e9-8939-50ac741e12f1'
        },
        {
            projName: 'testBlock',
            imgUrl: randomImg,
            shortDesc: 'A random image',
            uuid: 'e424fec3-b269-4f01-9467-9e3336c00e2a'
        }

    ]

    const renderGallery = () => {
        return workGallery.map(value => 
            
            <div className="gridblock-container" key={`gridblock-${value.uuid}`}>
                <div className="img-div">
                <img className="gridblock-img" src={value.imgUrl} alt="project screenshot"></img>
                </div>
                <div className="gridblock-desc">
                    <div className="desc-top">
                        <span><h4 className="desc-header">{value.projName}</h4></span>
                        <div className="grid-btn-cont">
                            <button className="gridblock-btns" style={{
                                backgroundImage:`url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg")`
                            }}>

                            </button>
                            <button className="gridblock-btns" style={{
                                backgroundImage:`url(${openNewIcon})`
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