(function() {
    "use strict";
    class Hero extends React.Component {
        constructor(props){
            super(props);
            // propos: nome
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
    ReactDOM.render(<Hero />, document.getElementById("react-ana"));
})();