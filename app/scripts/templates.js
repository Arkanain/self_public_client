angular.module('templates-main', ['views/about_us/index.html', 'views/articles/_form.html', 'views/articles/edit.html', 'views/articles/index.html', 'views/articles/new.html', 'views/articles/show.html', 'views/header.html', 'views/main_menu.html', 'views/sessions/new.html', 'views/users/_form.html', 'views/users/edit.html', 'views/users/index.html', 'views/users/new.html', 'views/users/show.html']);

angular.module("views/about_us/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/about_us/index.html",
    "");
}]);

angular.module("views/articles/_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/articles/_form.html",
    "<form name='articleForm' ng_controller='ArticleFormCtrl'>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      Title\n" +
    "    </label>\n" +
    "    <input ng_model='article.title' ng_required='true' type='text'>\n" +
    "    <label>\n" +
    "      Text\n" +
    "    </label>\n" +
    "    <textarea ng_model='article.text' ng_required='true' rows='15' ui_tinymce='tinymceOptions'></textarea>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <input class='button success' ng_click='submit(article)' ng_disabled='articleForm.$invalid' type='submit' value='Save Article'>\n" +
    "    <a class='button form_back alert' href='#/articles'>\n" +
    "      Back\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("views/articles/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/articles/edit.html",
    "<div id='articles'>\n" +
    "  <h1>\n" +
    "    Edit Article\n" +
    "  </h1>\n" +
    "  <ng-include src=\"'views/articles/_form.html'\"></ng-include>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/articles/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/articles/index.html",
    "<div id='articles'>\n" +
    "  <div ng_if='articles' ng_repeat='article in articles'>\n" +
    "    <div class='article_container'>\n" +
    "      <div class='article_title'>\n" +
    "        {{ article.title }}\n" +
    "      </div>\n" +
    "      <div class='article_content'>\n" +
    "        <div class='article_text'>\n" +
    "          <span ng_bind_html='article.text | truncate : true : 400'></span>\n" +
    "        </div>\n" +
    "        <div class='buttons'>\n" +
    "          <div class='action'>\n" +
    "            <a class='button success' ng_href='#/articles/{{ article.id }}'>\n" +
    "              <i class='fa fa-search'></i>\n" +
    "              <span class='button_text'>\n" +
    "                View\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "          <div class='action' ng_if='article.can_write'>\n" +
    "            <a class='button warning' ng_href='#/articles/{{ article.id }}/edit'>\n" +
    "              <i class='fa fa-pencil-square-o'></i>\n" +
    "              <span class='button_text'>\n" +
    "                Edit\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "          <div class='action' ng_if='article.can_write'>\n" +
    "            <a class='button alert' ng_really_click='delete($index)' ng_really_message='Are you sure?'>\n" +
    "              <i class='fa fa-trash-o'></i>\n" +
    "              <span class='button_text'>\n" +
    "                Delete\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <hr>\n" +
    "      <div class='author'>\n" +
    "        {{ article.user.full_name }}\n" +
    "      </div>\n" +
    "      <div class='created'>\n" +
    "        {{ article.created_at }}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class='page_actions' ng_if='can_write'>\n" +
    "  <div class='header'>\n" +
    "    Page actions:\n" +
    "  </div>\n" +
    "  <div class='add_article'>\n" +
    "    <a class='button' ng_href='#/articles/new'>\n" +
    "      <i class='fa fa-plus'></i>\n" +
    "      <span class='button_text'>\n" +
    "        Add Article\n" +
    "      </span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/articles/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/articles/new.html",
    "<div id='articles'>\n" +
    "  <h1>\n" +
    "    New Article\n" +
    "  </h1>\n" +
    "  <ng-include src=\"'views/articles/_form.html'\"></ng-include>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/articles/show.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/articles/show.html",
    "<div id='articles'>\n" +
    "  <div class='article_container'>\n" +
    "    <div class='article_title'>\n" +
    "      {{ article.title }}\n" +
    "    </div>\n" +
    "    <div class='article_content'>\n" +
    "      <div class='show_article_text' ng_bind_html='article.text'></div>\n" +
    "    </div>\n" +
    "    <hr ng_if='article.comments.length != 0'>\n" +
    "    <div class='comments' ng_controller='CommentIndexCtrl' ng_if='article.comments.length != 0'>\n" +
    "      <div class='comment_header'>\n" +
    "        Comments:\n" +
    "      </div>\n" +
    "      <div class='comment_content' ng_repeat='comment in article.comments'>\n" +
    "        <div class='comment_text' ng_bind_html='comment.text'></div>\n" +
    "        <div class='comment_author'>\n" +
    "          <div class='title'>\n" +
    "            Commented by:\n" +
    "          </div>\n" +
    "          <div class='name'>\n" +
    "            {{ comment.user.full_name }}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class='comment_actions' ng_if='comment.user.id == current_user.id'>\n" +
    "          <a class='button alert' ng_really_click='delete_comment($index)' ng_really_message='Are you sure?'>\n" +
    "            <i class='fa fa-trash-o'></i>\n" +
    "            <span class='button_text'>\n" +
    "              Delete\n" +
    "            </span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr ng_if='article.comments.length == 0'>\n" +
    "    <form id='comment' name='commentForm' ng_controller='CommentFormCtrl' ng_if='article &amp;&amp; can_write'>\n" +
    "      <div class='form_field'>\n" +
    "        <textarea ng_model='comment.text' ng_required='true' rows='6' ui_tinymce='tinymceOptions'></textarea>\n" +
    "        <input class='button success' ng_click='submit_comment(comment)' ng_disabled='commentForm.$invalid' type='submit' value='Add Comment'>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "  <a class='button show_back alert' ng_href='#/articles'>\n" +
    "    Back\n" +
    "  </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/header.html",
    "<div class='logo'>\n" +
    "  <span class='normal'>Self</span>\n" +
    "  <span class='big'>p</span>\n" +
    "  <span class='normal'>ublisher</span>\n" +
    "  <i class='fa fa-pencil'></i>\n" +
    "  <span class='extra'>...</span>\n" +
    "</div>\n" +
    "<div class='sign_out'>\n" +
    "  <span>\n" +
    "    {{ current_user.email }}\n" +
    "  </span>\n" +
    "  <a ng_click='sign_out()' ng_if='current_user'>\n" +
    "    <i class='fa fa-sign-out'></i>\n" +
    "    <span class='button_text'>\n" +
    "      Sign out\n" +
    "    </span>\n" +
    "  </a>\n" +
    "  <a ng_href='#/sign_in' ng_if='!current_user'>\n" +
    "    <i class='fa fa-sign-in'></i>\n" +
    "    <span class='button_text'>\n" +
    "      Sign in\n" +
    "    </span>\n" +
    "  </a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/main_menu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/main_menu.html",
    "<ul>\n" +
    "  <li ng_if='current_user.role == \"admin\"'>\n" +
    "    <a ng_href='#/users'>\n" +
    "      Users\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <a ng_href='#/articles'>\n" +
    "      Articles\n" +
    "    </a>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <a ng_href='#/about_us'>\n" +
    "      About Us\n" +
    "    </a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("views/sessions/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/sessions/new.html",
    "<div id='sessions'>\n" +
    "  <h2>\n" +
    "    Log in\n" +
    "  </h2>\n" +
    "  <form>\n" +
    "    <div class='field'>\n" +
    "      <label>\n" +
    "        Email\n" +
    "      </label>\n" +
    "      <input autofocus ng_model='user.email' type='email'>\n" +
    "      <label>\n" +
    "        Password\n" +
    "      </label>\n" +
    "      <input autocomplete='off' ng_model='user.password' type='password'>\n" +
    "    </div>\n" +
    "    <div class='actions'>\n" +
    "      <input class='button' ng_click='sign_in(user)' type='submit' value='Log in'>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/users/_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/users/_form.html",
    "<form name='userForm' ng_controller='UsersFormCtrl'>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      First name\n" +
    "    </label>\n" +
    "    <input ng_model='user.first_name' type='text'>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      Last name\n" +
    "    </label>\n" +
    "    <input ng_model='user.last_name' type='text'>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      Email\n" +
    "    </label>\n" +
    "    <input ng_model='user.email' ng_required='true' type='email'>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      Role\n" +
    "    </label>\n" +
    "    <select ng_model='user.role' ng_options='role.value as role.name for role in roles' ng_required='true'>\n" +
    "      <option value=''>\n" +
    "        Select role\n" +
    "      </option>\n" +
    "    </select>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      Password\n" +
    "    </label>\n" +
    "    <input ng_model='user.password' ng_required='{{password_required}}' type='password'>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <label>\n" +
    "      Password confirmation\n" +
    "    </label>\n" +
    "    <input ng_model='user.password_confirmation' ng_required='{{password_required}}' type='password'>\n" +
    "  </div>\n" +
    "  <div class='form_field'>\n" +
    "    <input class='button success' ng_click='submit(user)' ng_disabled='userForm.$invalid' type='submit' value='Save User'>\n" +
    "    <a class='button form_back alert' href='#/articles'>\n" +
    "      Back\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("views/users/edit.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/users/edit.html",
    "<div id='users'>\n" +
    "  <h1>\n" +
    "    Edit User\n" +
    "  </h1>\n" +
    "  <ng-include src=\"'views/users/_form.html'\"></ng-include>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/users/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/users/index.html",
    "<div id='users'>\n" +
    "  <table ng_if='users'>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <th>\n" +
    "          First name\n" +
    "        </th>\n" +
    "        <th>\n" +
    "          Last name\n" +
    "        </th>\n" +
    "        <th>\n" +
    "          Email\n" +
    "        </th>\n" +
    "        <th>\n" +
    "          Actions\n" +
    "        </th>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "      <tr ng_repeat='user in users'>\n" +
    "        <td class='first_name'>\n" +
    "          {{ user.first_name }}\n" +
    "        </td>\n" +
    "        <td class='last_name'>\n" +
    "          {{ user.last_name }}\n" +
    "        </td>\n" +
    "        <td class='username'>\n" +
    "          {{ user.email }}\n" +
    "        </td>\n" +
    "        <td class='buttons'>\n" +
    "          <div class='action'>\n" +
    "            <a class='button success' ng_href='#/users/{{ user.id }}'>\n" +
    "              <i class='fa fa-search'></i>\n" +
    "              <span class='button_text'>\n" +
    "                View\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "          <div class='action'>\n" +
    "            <a class='button warning' ng_href='#/users/{{ user.id }}/edit'>\n" +
    "              <i class='fa fa-pencil-square-o'></i>\n" +
    "              <span class='button_text'>\n" +
    "                Edit\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "          <div class='action' ng_if='current_user.id != user.id'>\n" +
    "            <a class='button alert' ng_really_click='delete($index)' ng_really_message='Are you sure?'>\n" +
    "              <i class='fa fa-trash-o'></i>\n" +
    "              <span class='button_text'>\n" +
    "                Delete\n" +
    "              </span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "    </tbody>\n" +
    "  </table>\n" +
    "</div>\n" +
    "<div class='page_actions'>\n" +
    "  <div class='header'>\n" +
    "    Page actions:\n" +
    "  </div>\n" +
    "  <div class='add_user'>\n" +
    "    <a class='button' ng_href='#/users/new'>\n" +
    "      <i class='fa fa-plus'></i>\n" +
    "      <span class='button_text'>\n" +
    "        Add User\n" +
    "      </span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/users/new.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/users/new.html",
    "<div id='users'>\n" +
    "  <h1>\n" +
    "    New User\n" +
    "  </h1>\n" +
    "  <ng-include src=\"'views/users/_form.html'\"></ng-include>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/users/show.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/users/show.html",
    "<div id='users'>\n" +
    "  <ul>\n" +
    "    <li>\n" +
    "      <b>\n" +
    "        First name:\n" +
    "      </b>\n" +
    "      {{ user.first_name }}\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <b>\n" +
    "        Last name:\n" +
    "      </b>\n" +
    "      {{ user.last_name }}\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <b>\n" +
    "        Email:\n" +
    "      </b>\n" +
    "      {{ user.email }}\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <p>\n" +
    "    <a class='button alert' ng_href='#/users'>\n" +
    "      Back\n" +
    "    </a>\n" +
    "  </p>\n" +
    "</div>\n" +
    "");
}]);
