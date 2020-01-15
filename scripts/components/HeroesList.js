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