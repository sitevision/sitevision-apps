import Locale from '../../builtins/Locale';

interface LocaleUtil {
  /**
   * Get a Java locale from a string representation
   *
   * @param localeString a string containing a Language tag ("sv-SE"), or a locale ("sv", "sv_SE")
   */
  getLocaleByString(localeString: string): Locale;
}

export default LocaleUtil;
