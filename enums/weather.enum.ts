export enum WeatherCondition {
    CLEAR_SKY = 'clear sky',
    FEW_CLOUDS = 'few clouds',
    SCATTERED_CLOUDS = 'scattered clouds',
    BROKEN_CLOUDS = 'broken clouds',
    SHOWER_RAIN = 'shower rain',
    RAIN = 'rain',
    THUNDERSTORM = 'thunderstorm',
    SNOW = 'snow',
    MIST = 'mist'
}


export const getWeatherImage = (condition: WeatherCondition | string): string => {

    const normalizedCondition = Object.values(WeatherCondition).includes(condition as WeatherCondition)
        ? condition as WeatherCondition
        : WeatherCondition.CLEAR_SKY;

    switch (normalizedCondition) {
        case WeatherCondition.CLEAR_SKY:
            return '/images/sun.png';
        case WeatherCondition.FEW_CLOUDS:
        case WeatherCondition.SCATTERED_CLOUDS:
        case WeatherCondition.BROKEN_CLOUDS:
            return '/images/cloud.png';
        case WeatherCondition.SHOWER_RAIN:
        case WeatherCondition.RAIN:
            return '/images/rain.png';
        case WeatherCondition.THUNDERSTORM:
            return '/images/rain.png'; 
        case WeatherCondition.SNOW:
            return '/images/snow.png';
        case WeatherCondition.MIST:
            return '/images/mist.png';
        default:
            return '/images/sun.png';
    }
};
