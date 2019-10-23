(function() {
    "use strict";
    /** Constants with the states names e states values. */
    const STATE_NAME = "filterHeroName";
    const STATE_DIFFICULTY = "filterHeroDifficulty";
    const STATE_ROLE = "filterHeroRole";
    const ROLE_SUPPORT = "support";
    const ROLE_TANK = "tank";
    const ROLE_DAMAGE = "damage";
    const DIFFICUTIES = [
        { 
            'display':  '-- select --',
            'key': '0'
        },
        {
            'display': 'Easy',
            'key': 'easy'
        },
        {
            'display': 'Moderate',
            'key': 'moderate'
        },
        {
            'display': 'Hard',
            'key': 'hard'
        }
    ];
    /** Class with filter opions for listing Heroes.
     * Contains methods to update states filters.
     */
    function HeroesFilter(props) {
        const CSS_ROLE_IMG = "filter-img-damage d-block mx-auto";
        const CSS_ROLE_NAME = "filter-role-name mx-auto text-center";
        // Update filters states:
        function updateFilterName(e) { 
            props.updateStates(STATE_NAME, e.target.value);
        }
        function updateFilterDifficulty(e) {
            props.updateStates(STATE_DIFFICULTY, e.target.value);
         }
        function updateFilterRoleSupport() { 
            props.updateStates(STATE_ROLE, ROLE_SUPPORT);
        }
        function updateFilterRoleTank() { 
            props.updateStates(STATE_ROLE, ROLE_TANK);
        }
        function updateFilterRoleDamage() { 
            props.updateStates(STATE_ROLE, ROLE_DAMAGE);
        }
        function resetStates() { 
            props.resetStates();
        }
        return(
            <section id="filters-component">
                <h1 className="font-weight-bold text-center bg-dark text-warning pt-2 pb-2">FILTERS</h1>
                <div className="container-fluid">
                    <ul className="row">
                        <li className="col-sm-12 col-md-6">
                            <div className="mx-auto filter-block">
                                <label htmlFor="filter-name">Hero name:</label>
                                <input id="filter-name" type="text" name="filter-name" 
                                    value={props.filterHeroName} onChange={updateFilterName} />
                            </div>
                        </li>
                        <li className="col-sm-12 col-md-6">
                            <div className="mx-auto filter-block">
                                <label htmlFor="filter-diffitulty">Hero difficult:</label>
                                <select id="filter-difficulty" name="filter-difficulty" 
                                    value={props.filterHeroDifficulty} onChange={updateFilterDifficulty}>
                                    {DIFFICUTIES.map(function(difficulty){
                                        return (
                                            <option value={difficulty.key} key={difficulty.key}>{difficulty.display}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="filters-roles" className="container-fluid filter-roles">
                    <ul className="row">
                        <li className="col-4">
                            <a href="#filters-roles" 
                                className={props.filterHeroRole === ROLE_DAMAGE ? CSS_ROLE_IMG + " bg-damage" : CSS_ROLE_IMG} 
                                value={props.filterHeroRole} onClick={updateFilterRoleDamage}></a>
                            <p className={props.filterHeroRole === ROLE_DAMAGE ? CSS_ROLE_NAME + " bg-damage font-bold text-white" : CSS_ROLE_NAME}>DAMAGE</p>
                        </li>
                        <li className="col-4">
                            <a href="#filters-roles" 
                                className={props.filterHeroRole === ROLE_TANK ? CSS_ROLE_IMG + " bg-tank" : CSS_ROLE_IMG} 
                                value={props.filterHeroRole} onClick={updateFilterRoleTank}></a>
                            <p className={props.filterHeroRole === ROLE_TANK ? CSS_ROLE_NAME + " bg-tank font-bold text-white" : CSS_ROLE_NAME}>TANK</p>
                        </li>
                        <li className="col-4">
                            <a href="#filters-roles" 
                                className={props.filterHeroRole === ROLE_SUPPORT ? CSS_ROLE_IMG + " bg-support" : CSS_ROLE_IMG} 
                                value={props.filterHeroRole} onClick={updateFilterRoleSupport}></a>
                            <p className={props.filterHeroRole === ROLE_SUPPORT ? CSS_ROLE_NAME + " bg-support font-bold text-white" : CSS_ROLE_NAME}>SUPPORT</p>
                        </li>
                    </ul>
                </div>
                <a href="#" onClick={resetStates}>Clean filters</a>
            </section>
        );
    }
    /** Class that display a list of Heroes.
     * 
     */
    function HeroesList(props) {
        return(
            <section id="heroes-list-component" className="container-fluid p-0">
                <h1 className="font-weight-bold text-center bg-dark text-warning pt-2 pb-2">HEROES</h1>
                {props.heroesList.map(function(hero) {
                    return(
                        <div className="row hero-component">
                            <div className="col-12 col-lg-3 col-xl-2 text-center">
                                <h2>{hero.apelido}</h2>
                                <img className={"hero-portrait border border-dark bg-" + hero.posicao.toLowerCase()}
                                    src={"img/" + hero.apelido.toLowerCase() + "/portrait.png"}     
                                    title={hero.nome} alt={hero.nome} />
                            </div>
                            <div className="col-12 col-lg-2 order-md-2 order-lg-3 text-center pt-1 pt-lg-0">
                                <img className="img-icon-roles mr-2" 
                                    src={"img/" + hero.posicao.toLowerCase() + "_icon_small.png"} 
                                    title={hero.posicao} alt={hero.posicao} />
                                <img src={"img/" + hero.dificuldade.toLowerCase() + "_icon.png"} 
                                    title={hero.dificuldade} alt={hero.dificuldade} />
                            </div>
                            <div className="col-12 col-lg-7 col-xl-8 order-md-3 order-lg-2 align-self-md-center">
                                <ul>
                                    {hero.habilidades.map(function(hb) {
                                        var hbDetails = hb.split('|');
                                        return(
                                            <li className="clearfix">
                                                <h2 className="bg-secondary text-white p-1">{hbDetails[0]}</h2>
                                                <img className="float-left mr-2 mb-2 bg-not-selected" 
                                                    src={"img/" + hero.apelido.toLowerCase() + "/" + hbDetails[2] + ".png"} 
                                                    title={hbDetails[0]} alt={hbDetails[0]} />
                                                <p>{hbDetails[1]}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </section>
        );
    }
    /** Main app class.
     * 
     */
    class HeroesApp extends React.Component{
        constructor(props) {
            super(props);
            // Set the default states. In case of the list, the default is heroes.
            this.state = {
                filterHeroName: "",
                filterHeroDifficulty: "",
                filterHeroRole: "",
                heroesList: HEROES
            };
            this.updateStates = this.updateStates.bind(this);
            this.resetStates = this.resetStates.bind(this);
            //this.updateList = this.updateList.bind(this);
        }
        updateStates(name, value) {
            this.setState({
                [name]: value
            });
        }
        resetStates(){
            this.setState({
                filterHeroName: "",
                filterHeroDifficulty: "",
                filterHeroRole: ""//,
                //heroesList = this.heroes
            });
        }
        /*updateList(list) {
            var list = heroes.filter(
                function(hero) {
                    return (
                        (this.state.filterHeroName === "" || hero.nome.toLowerCase().indexOf(this.state.filterHeroName.toLowerCase()) !== -1) 
                        && 
                        (this.state.filterHeroRole === "" || hero.posicao === this.state.filterHeroRole)
                    );
                }.bind(this));
            this.setState({
                heroesList: list
            })
        }*/
        render() {
            return (
                <main className="container-fluid">
                    <div className="text-center bg-secondary p-1">
                        <img className="site-logo" src="img/overwatch_logo.png" alt="Overwatch" title="Overwacth" />
                        <h1 className="font-bold text-warning">HEROES</h1>
                    </div>
                    <HeroesFilter 
                        updateStates={this.updateStates} 
                        resetStates={this.resetStates}
                        filterHeroName={this.state.filterHeroName}
                        filterHeroDifficulty={this.state.filterHeroDifficulty}
                        filterHeroRole={this.state.filterHeroRole}
                    />
                    <HeroesList heroesList={this.state.heroesList}/>
                </main>
            );
        }
    }
    ReactDOM.render(<HeroesApp />, document.getElementById("heroes-app"));
})();