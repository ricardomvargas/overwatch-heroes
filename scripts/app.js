(function() {
    "use strict";
    /** Main app class.
     * 
     */
    class HeroesApp extends React.Component{
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <main className="container-fluid">
                    <div className="text-center bg-secondary p-1">
                        <img className="site-logo" src="img/overwatch_logo.png" alt="Overwatch" title="Overwacth" />
                        <h1 className="font-bold text-warning">HEROES</h1>
                    </div>
                    <HeroesFilter />
                    <HeroesList />
                </main>
            );
        }
    }
    /** Class with filter options for listing Heroes.
     * 
     */
    class HeroesFilter extends React.Component {
        constructor(props) {
            super(props);
            this.setState({
                heroName: "",
                heroDifficulty: "",
                heroRole: ""
            });
        }
        render(){
            return(
                <section id="filters-component">
                    <h1 className="font-weight-bold text-center bg-dark text-warning pt-2 pb-2">FILTERS</h1>
                    <div className="container-fluid">
                        <ul className="row">
                            <li className="col-sm-12 col-md-6">
                                <div className="mx-auto filter-block">
                                    <label htmlFor="filter-name">Hero name:</label>
                                    <input id="filter-name" type="text" name="filter-name" />
                                </div>
                            </li>
                            <li className="col-sm-12 col-md-6">
                                <div className="mx-auto filter-block">
                                    <label fohtmlForr="filter-diffitulty">Hero difficult:</label>
                                    <select id="filter-difficulty" name="filter-difficulty">
                                        <option value="0">-- select ---</option>
                                        <option value="easy">Easy</option>
                                        <option value="modarate">Moderate</option>
                                        <option value="difficult">Difficult</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="container-fluid filter-roles">
                        <ul className="row">
                            <li className="col-4">
                                <a href="#" class="filter-img-damage d-block mx-auto"></a>
                                <p className="filter-role-name mx-auto text-center">DAMAGE</p>
                            </li>
                            <li className="col-4">
                                <a href="#" className="filter-img-tank d-block mx-auto"></a>
                                <p className="filter-role-name mx-auto text-center">TANK</p>
                            </li>
                            <li className="col-4">
                                <a href="#" className="filter-img-support d-block mx-auto"></a>
                                <p className="filter-role-name mx-auto text-center">SUPPORT</p>
                            </li>
                        </ul>
                    </div>
                </section>
            );
        }
    }
    /** Class that display a list of Heroes.
     * 
     */
    class HeroesList extends React.Component {
        constructor(props) {
            super(props);
            this.setState({
                heroesList: []
            });
        }
        render() {
            return(
                <section id="heroes-list-component" class="container-fluid p-0">
                    <h1 className="font-weight-bold text-center bg-dark text-warning pt-2 pb-2">HEROES</h1>
                    <Hero />
                </section>
            );
        }
    }
    /** Class that display a Hero detail.
     * TO-DO: Check if is necessary to be a class or if can just be a fuction.
     */
    class Hero extends React.Component {
        constructor(props){
            super(props);
            // propos: name, role, difficulty, habilitiesList [name, img, description] 
        }
        render() {
            return (
                <div className="row hero-component">
                    <div className="col-12 col-lg-3 col-xl-2 text-center">
                        <h2>Ana</h2>
                        <img className="hero-portrait border border-dark bg-support" src="img/ana/portrait.png" title="Ana" alt="Ana" />
                    </div>
                    <div className="col-12 col-lg-2 order-md-2 order-lg-3 text-center pt-1 pt-lg-0">
                        <img className="img-icon-roles mr-2" src="img/support_icon_small.png" title="Support" alt="Support" />
                        <img src="img/hard_icon.png" title="Hard" alt="Hard" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-8 order-md-3 order-lg-2 align-self-md-center">
                        <ul>
                            <li>
                                <h2 className="bg-secondary text-white p-1">Biotic Rifle</h2>
                                <img className="float-left mr-2 mb-2 bg-not-selected" src="img/ana/biotic_rifle.png" title="Biotic Fifle" alt="Biotic Rifle" />
                                <p>O rifle de Ana atira dardos que podem restaurar a vida de seus aliados ou causar dano continuado a seus inimigos. Ela é capaz de usar a mira telescópica de seu rifle para dar tiros incrivelmente precisos.</p>
                            </li>
                            <li className="clearfix">
                                <h2 className="bg-secondary text-white p-1">Sleep Dart</h2>
                                <img className="float-left mr-2 mb-2 bg-not-selected img-skill" src="img/ana/sleep_dart.png" title="Sleep Dart" alt="Sleep Dart" />
                                <p>Ana dispara um dardo de sua arma secundária, deixando seus inimigos inconscientes (porém eles despertam ao receber dano).</p>
                            </li>
                            <li className="clearfix">
                                <h2 className="bg-secondary text-white p-1">Biotic Granade</h2>
                                <img className="float-left mr-2 mb-2 bg-not-selected img-skill" src="img/ana/biotic_granade.png" title="Biotic Granade" alt="Biotic Granade" />
                                <p>Ana lança uma granada biótica que causa dano aos inimigos e cura os aliados em uma pequena área de efeito. Aliados afetados recebem por tempo limitado cura aumentada de todas as fontes, enquanto inimigos pegos pela explosão não podem se curar por alguns instantes.</p>
                            </li>
                            <li className="clearfix">
                                <h2 className="bg-secondary text-white p-1">Nano Boost</h2>
                                <img className="float-left mr-2 mb-2 bg-not-selected img-skill" src="img/ana/nano_boost.png" title="Nano Boost" alt="Nano Boost" />
                                <p>Depois que Ana atinge seus aliados com um estimulante de combate, eles causam mais dano e recebem menos dano dos ataques inimigos temporariamente.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    }
    ReactDOM.render(<HeroesApp />, document.getElementById("heroes-app"));
})();