import Cookies from 'js-cookie';

const CONSENT_COOKIE_NAME = 'consent';
const CONSENT_EXPIRATION_HOURS = 4;

export const setConsentCookie = () => {
    Cookies.set(CONSENT_COOKIE_NAME, 'accepted', { expires: CONSENT_EXPIRATION_HOURS / 24 });
};

export const hasConsentCookie = () => {
    return Cookies.get(CONSENT_COOKIE_NAME) === 'accepted';
};