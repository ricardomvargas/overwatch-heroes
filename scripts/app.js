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
    /** Filter component function.
     * Contains methods to update states filters. */
    function HeroesFilter(props) {
        var css_bg_damage = props.filterHeroRole === ROLE_DAMAGE ? "bg-damage filter-selected" : "";
        var css_bg_tank = props.filterHeroRole === ROLE_TANK ? "bg-tank filter-selected" : "";
        var css_bg_support = props.filterHeroRole === ROLE_SUPPORT ? "bg-support filter-selected" : "";
        // Update filters states:
        function updateFilterName(e) { 
            props.updateStates(STATE_NAME, e.target.value);
        }
        function updateFilterDifficulty(e) {
            var val = '';
            if (e.target.value != '0')
                val = e.target.value;
            props.updateStates(STATE_DIFFICULTY, val);
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
                        <li id="damage" className="col-4">
                            <a href="#damage" 
                                className={"filter-img-damage d-block mx-auto " + css_bg_damage}
                                value={props.filterHeroRole} onClick={updateFilterRoleDamage}></a>
                            <p className={"filter-role-name mx-auto text-center " + css_bg_damage}>DAMAGE</p>
                        </li>
                        <li id="tank" className="col-4">
                            <a href="#tank" 
                                className={"filter-img-tank d-block mx-auto " + css_bg_tank}
                                value={props.filterHeroRole} onClick={updateFilterRoleTank}></a>
                            <p className={"filter-role-name mx-auto text-center " + css_bg_tank}>TANK</p>
                        </li>
                        <li id="support" className="col-4">
                            <a href="#support" 
                                className={"filter-img-support d-block mx-auto " + css_bg_support}
                                value={props.filterHeroRole} onClick={updateFilterRoleSupport}></a>
                            <p className={"filter-role-name mx-auto text-center " + css_bg_support}>SUPPORT</p>
                        </li>
                    </ul>
                </div>
                <div className="text-center mb-1">
                    <a id="reset-filters" href="#" onClick={resetStates}>Reset filters</a>
                </div>
            </section>
        );
    }
    /** Heroe list component.
     * Function that display a list of Heroes. */
    function HeroesList(props) {
        return(
            <section id="heroes-list-component" className="container-fluid p-0">
                <h1 className="font-weight-bold text-center bg-dark text-warning pt-2 pb-2">HEROES</h1>
                    {props.heroesList.map(function(hero) {
                        return (<Hero hero={hero} key={hero.cod} />);
                    })}
            </section>
        );
    }
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
    /** Heroes App component.
     * Main app class. */
    class HeroesApp extends React.Component{
        constructor(props) {
            super(props);
            // Set the default states. For the heroeList state, the default value is HEROES.
            this.state = {
                filterHeroName: "",
                filterHeroDifficulty: "",
                filterHeroRole: "",
                heroesList: HEROES
            };
            this.updateStates = this.updateStates.bind(this);
            this.resetStates = this.resetStates.bind(this);
        }
        updateStates(name, value) {
            this.setState({
                [name]: value
            }, this.updateList);
        }
        resetStates(){
            this.setState({
                filterHeroName: "",
                filterHeroDifficulty: "",
                filterHeroRole: ""
            }, this.updateList);
        }
        updateList() {
            var list = HEROES.filter(
                function(hero) {
                    return (
                        (this.state.filterHeroName === "" || hero.nickname.toLowerCase().indexOf(this.state.filterHeroName.toLowerCase()) !== -1) 
                        && 
                        (this.state.filterHeroRole === "" || hero.role.toLowerCase() === this.state.filterHeroRole)
                        &&
                        (this.state.filterHeroDifficulty === "" || hero.difficulty.toLowerCase() === this.state.filterHeroDifficulty)
                    );
                }.bind(this));
            this.setState({
                heroesList: list
            })
        }
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