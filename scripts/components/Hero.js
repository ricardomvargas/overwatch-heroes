/** Hero component.
 * Function that display a hero. */
function Hero(props) {
    return(
        <div className="row hero-component">
            <div className="col-12 col-lg-3 col-xl-2 text-center">
                <h2>{props.hero.nickname}</h2>
                <img className={"hero-portrait border border-dark bg-" + props.hero.role.toLowerCase()}
                    src={"img/" + props.hero.nickname.toLowerCase() + "/portrait.png"}     
                    title={props.hero.nickname} alt={props.hero.nickname} />
            </div>
            <div className="col-12 col-lg-2 order-md-2 order-lg-3 text-center pt-1 pt-lg-0 mb-1">
                <img className="img-icon-roles mr-2" 
                    src={"img/" + props.hero.role.toLowerCase() + "_icon_small.png"} 
                    title={props.hero.role} alt={props.hero.role} />
                <img src={"img/" + props.hero.difficulty.toLowerCase() + "_icon.png"} 
                    title={props.hero.difficulty} alt={props.hero.difficulty} />
            </div>
            <div className="col-12 col-lg-7 col-xl-8 order-md-3 order-lg-2 align-self-md-center">
                <ul>
                    {props.hero.skills.map(function(hb, index) {
                        var hbDetails = hb.split('|');
                        return(
                            <li className="clearfix" key={index}>
                                <h2 className="bg-secondary text-white p-1">{hbDetails[0]}</h2>
                                <img className="float-left mr-2 mb-2 bg-not-selected" 
                                    src={"img/" + props.hero.nickname.toLowerCase() + "/" + hbDetails[2] + ".png"} 
                                    title={hbDetails[0]} alt={hbDetails[0]} />
                                <p>{hbDetails[1]}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}