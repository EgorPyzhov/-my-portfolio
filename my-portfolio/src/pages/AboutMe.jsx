function AboutMe() {
    return (
        <div>
            <h2>Про мене</h2>

            <section>
                <h3>Коротко про мене</h3>
                <p>
                    Я звичайна людина, яка зараз пробує себе у програмуванні.
                    Люблю прості речі — спорт, ігри та нормальний відпочинок.
                </p>

                <p>
                    Як розробник — тільки починаю, поступово вивчаю технології
                    і намагаюсь розібратись, що саме мені більше підходить.
                </p>
            </section>

            <section>
                <h3>Цінності та захоплення</h3>
                <p>
                    Люблю спорт і відеоігри — це допомагає відпочити і переключитись.
                    У програмуванні поки що не визначився з напрямком, пробую різні варіанти.
                </p>

                <p>
                    В навчанні намагаюсь просто рухатись вперед і не забивати, навіть якщо складно.
                </p>
            </section>

            <section>
                <h3>Мої проєкти</h3>

                <div className="projects">
                    <div>
                        <h4>HTML + CSS</h4>
                        <a href="https://github.com/knEgor/Werstka.git"
                            target="_blank"
                            rel="noreferrer">
                            Werstka
                        </a>
                    </div>

                    <div>
                        <h4>JavaScript</h4>
                        <a href="https://github.com/knEgor/js-fetchFirstLab.git"
                            target="_blank"
                            rel="noreferrer">
                            JS Fetch Project
                        </a>
                    </div>

                    <div>
                        <h4>React</h4>
                        <a href="https://github.com/EgorPyzhov/react-first-lab.git"
                            target="_blank"
                            rel="noreferrer">
                            React First Labhref="https:
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;