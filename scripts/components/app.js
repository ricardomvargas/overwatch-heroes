(function() {
    "use strict";
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
        resetStates() {
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