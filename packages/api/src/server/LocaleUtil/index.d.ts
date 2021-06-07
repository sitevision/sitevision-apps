import Locale from '../../builtins/Locale';

declare namespace localeUtil {
  /**
   * Get a Java locale from a string representation
   *
   * @param localeString a string containing a Language tag ("sv-SE"), or a locale ("sv", "sv_SE")
   */
  function getLocaleByString(localeString: string): Locale;
}

export default localeUtil;
