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