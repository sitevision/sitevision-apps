module.exports = {
  env: {
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['eslint:recommended'],
  globals: {
    global: true,
  },
  rules: {
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          '@sitevision/api/**/BuddyIconRenderer',
          '@sitevision/api/**/CompoundAndFilterBuilder',
          '@sitevision/api/**/CompoundComparatorBuilder',
          '@sitevision/api/**/CompoundOrFilterBuilder',
          '@sitevision/api/**/ExtendedDismaxParserBuilder',
          '@sitevision/api/**/FileIconRenderer',
          '@sitevision/api/**/FilterBuilder',
          '@sitevision/api/**/HighlightBuilder',
          '@sitevision/api/**/ImageRenderer',
          '@sitevision/api/**/ImageLinkRenderer',
          '@sitevision/api/**/LinkRenderer',
          '@sitevision/api/**/LinkTargetBuilder',
          '@sitevision/api/**/LinkValueBuilder',
          '@sitevision/api/**/MailBuilder',
          '@sitevision/api/**/MonitorBuilder',
          '@sitevision/api/**/RelatedValueBuilder',
          '@sitevision/api/**/RoleAssignmentBuilder',
          '@sitevision/api/**/RoleMatcherBuilder',
          '@sitevision/api/**/SearcherBuilder',
          '@sitevision/api/**/SortBuilder',
          '@sitevision/api/**/SpellCheckBuilder',
          '@sitevision/api/**/StandardParserBuilder',
          '@sitevision/api/**/TemporaryNodeBuilder',
          '@sitevision/api/**/TemporaryFileNodeBuilder',
          '@sitevision/api/**/TextModuleRendererBuilder',
          '@sitevision/api/**/UserFieldRenderer',
        ],
      },
    ],
  },
};
