import './AnimeScreen.css'

const AnimeScreen = () => {
    const mem = 1270756;

    return (
        <div className="animescreen">

            <div className="anime-title">
                <strong>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</strong>
                <p>Rascal Does Not Dream of Bunny Girl Senpai</p>
            </div>

            <div className="anime-about">
                <div className="left-side-content">
                    <img src="https://cdn.myanimelist.net/images/anime/1301/93586.jpg?s=f19bb396363ae0caf8f1e1e8c17b49ac" alt="bunny" />
                    <div className="information">
                        <strong>Information</strong>
                        <hr />
                        <p>
                            <strong>Type: </strong>
                            TV
                        </p>
                        <p>
                            <strong>Episodes: </strong>
                            13
                        </p>
                        <p>
                            <strong>Status: </strong>
                            Finished airing
                        </p>
                        <p>
                            <strong>Aired: </strong>
                            Oct 4, 2018 to Dec 27, 2018
                        </p>
                        <p>
                            <strong>Premiered: </strong>
                            Fall 2018
                        </p>
                        <p>
                            <strong>Studios: </strong>
                            CloverWorks
                        </p>
                        <p>
                            <strong>Genres: </strong>
                            Comedy, Drama, Romance, Supernatural
                        </p>
                        <p>
                            <strong>Source: </strong>
                            Light Novel
                        </p>
                    </div>
                </div>
                <hr />
                <div className="right-side-content">
                    <div className="statistics">
                        <p>
                            <span>SCORE</span>
                            <br />
                            <strong>8.31</strong>
                        </p>
                        <p>Ranked
                            <br />
                            <strong>#216</strong>
                        </p>
                        <p>Popularity
                            <br />
                            <strong>#62</strong>
                        </p>
                        <p>Members
                            <br />
                            <strong>{mem.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                        </p>
                        <p>Premiered
                            <br />
                            <strong>Fall 2018</strong>
                        </p>
                    </div>

                    <br />

                    <strong>Synopsis: </strong>
                    <hr />
                    <p>
                        The rare and inexplicable Puberty Syndrome is thought of as a myth.It is a rare disease which only affects teenagers, and its symptoms are so supernatural that hardly anyone recognizes it as a legitimate occurrence.However, high school student Sakuta Azusagawa knows from personal experience that it is very much real, and happens to be quite prevalent in his school.Mai Sakurajima is a third-year high school student who gained fame in her youth as a child actress, but recently halted her promising career for reasons unknown to the public.With an air of unapproachability, she is well known throughout the school, but none dare interact with her—that is until Sakuta sees her wandering the library in a bunny girl costume.Despite the getup, no one seems to notice her, and after confronting her, he realizes that she is another victim of Puberty Syndrome.As Sakuta tries to help Mai through her predicament, his actions bring him into contact with more girls afflicted with the elusive disease.[Written by MAL Rewrite]
                    </p>
                    <br />

                    <strong>Ending Theme:</strong>
                    <hr />
                    <p>1:\"Fukashigi no Carte (不可思議のカルテ)\" by Mai Sakurajima (Asami Seto), Tomoe Koga (Nao Touyama), Rio Futaba (Atsumi Tanezaki), Nodoka Toyohama (Maaya Uchida), Kaede Azusawara (Yurika Kubo), Shouko Makinohara (Inori Minase)(eps 1,13)</p>
                    <p>2:\"Fukashigi no Carte (不可思議のカルテ)\" by Mai Sakurajima (Asami Seto)(eps 2-3)</p>
                    <p>3:\"Fukashigi no Carte (不可思議のカルテ)\" by Tomoe Koga (Nao Touyama)(eps 4-5)</p>
                    <p>4:\"Fukashigi no Carte (不可思議のカルテ)\" by Rio Futaba (Atsumi Tanezaki)(eps 7-8)</p>
                    <p>5:\"Fukashigi no Carte (不可思議のカルテ)\" by Nodoka Toyohama (Maaya Uchida)(eps 9-10)</p>
                    <p>6:\"Fukashigi no Carte (不可思議のカルテ)\" by Kaede Azusawara (Yurika Kubo)(eps 11-12)</p>
                </div>
            </div>
        </div>
    )
}

export default AnimeScreen
