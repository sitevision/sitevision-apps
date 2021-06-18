import Locale from '../../builtins/Locale';

/**
 * Get a Java locale from a string representation
 *
 * @param localeString a string containing a Language tag ("sv-SE"), or a locale ("sv", "sv_SE")
 */
export function getLocaleByString(localeString: string): Locale;

declare namespace localeUtil {
  export { getLocaleByString };
}

export default localeUtil;
