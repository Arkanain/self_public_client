angular.module('templates-main', ['views/about_us/index.html', 'views/articles/_form.html', 'views/articles/edit.html', 'views/articles/index.html']);

angular.module('views/about_us/index.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/about_us/index.html',
    '');
}]);

angular.module('views/articles/_form.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/articles/_form.html',
    '<form name=\'articleForm\'>\n' +
    '  <div class=\'form_field\'>\n' +
    '    <label>\n' +
    '      Title\n' +
    '    </label>\n' +
    '    <input ng_model=\'article.title\' ng_required=\'true\' type=\'text\'>\n' +
    '    <label>\n' +
    '      Text\n' +
    '    </label>\n' +
    '    <textarea ng_model=\'article.text\' ng_required=\'true\' rows=\'15\'></textarea>\n' +
    '  </div>\n' +
    '  <div class=\'form_field\'>\n' +
    '    <input class=\'button success\' ng_click=\'submit(article)\' ng_disabled=\'articleForm.$invalid\' type=\'submit\' value=\'Save Article\'>\n' +
    '    <a class=\'button form_back alert\' href=\'#/articles\'>\n' +
    '      Back\n' +
    '    </a>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('views/articles/edit.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/articles/edit.html',
    '<div id=\'articles\'>\n' +
    '  <h1>\n' +
    '    Edit Article\n' +
    '  </h1>\n' +
    '  <ng-include src="\'views/articles/_form.html\'"></ng-include>\n' +
    '</div>\n' +
    '');
}]);

angular.module('views/articles/index.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/articles/index.html',
    '');
}]);
