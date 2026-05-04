import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";

function MyCity() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getWeather()
            .then((res) => setWeather(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>Моє місто — Нікополь</h2>

            <p>
                Нікополь — місто в Дніпропетровській області України, розташоване на правому березі Дніпра.
                Воно має давню історію і вважається одним із центрів, пов’язаних із запорозьким козацтвом.
            </p>

            <p>
                У минулому поруч із сучасним Нікополем знаходилась одна із Запорозьких Січей.
                Сьогодні це промислове місто, відоме металургією та підприємствами важкої промисловості.
            </p>

            <p>
                Попри складні часи, місто залишається важливою частиною регіону і місцем, де живуть і працюють люди.
            </p>

            {weather && (
                <div className="weather">
                    <h3>Погода зараз</h3>
                    <p>Місто: {weather.location.name}</p>
                    <p>Країна: {weather.location.country}</p>
                    <p>Температура: {weather.current.temp_c}°C</p>
                    <p>Стан: {weather.current.condition.text}</p>
                    <p>
                        Координати: {weather.location.lat}, {weather.location.lon}
                    </p>
                </div>
            )}
        </div>
    );
}

export default MyCity;