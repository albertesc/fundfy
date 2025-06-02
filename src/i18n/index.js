import spanish from './es.json';
import english from './en.json';
import lituanian from './lt.json';

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en',
    LITUANIAN: 'lt'
}

function getI18N ({ currentLocale }) {
    if(currentLocale === LANGUAGES.ENGLISH) return english;
    if(currentLocale === LANGUAGES.SPANISH) return spanish;
    if(currentLocale === LANGUAGES.LITUANIAN) return lituanian;
    return english;
}

export { LANGUAGES, getI18N }