angular.module("cahsowan").run(["$templateCache", function($templateCache) {$templateCache.put("categories.html","<h1>Category of: {{ category }}</h1>\n\n<div cg-busy=\"myPromise\">\n    <table class=\"table-posts\">\n        <tr ng-repeat=\"post in posts\">\n            <td class=\"date-column\">{{ post.date }}</td>\n            <td><h3><a href=\"/#!/posts/{{ post.slug }}\">{{ post.title }}</a></h3></td>\n        </tr>\n    </table>\n</div>\n\n<pagination ng-show=\"isPageable(totalItems, perPage)\" total-items=\"totalItems\" items-per-page=\"perPage\" max-size=\"maxSize\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>");
$templateCache.put("home.html","<div cg-busy=\"myPromise\">\n    <div class=\"posts-list\">\n        <article ng-repeat=\"post in posts\">\n            <div class=\"post-date\">\n                <i class=\"fa fa-calendar-o\"></i> {{ post.date }}, \n                <i class=\"fa fa-clock-o\"></i> {{ post.time }}\n            </div>\n            <h2 class=\"post-title\">\n                <a href=\"/#!/posts/{{ post.slug }}\">{{ post.title }}</a>\n            </h2>\n            <div class=\"post-terms\">\n                <ul class=\"pull-left\">\n                    <li ng-repeat=\"category in post.categories\">\n                        <a href=\"/#!/categories/{{ category.slug }}\">\n                            <i class=\"fa fa-folder-o\"></i> {{ category.name }}\n                        </a> \n                    </li>\n                </ul>\n                <ul class=\"pull-right\">\n                    <li ng-repeat=\"tag in post.tags\">\n                        <a href=\"/#!/tags/{{ tag.slug }}\">\n                            <i class=\"fa fa-tag\"></i> {{ tag.name }}\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"clearfix\"></div>\n            <hr>\n\n            <div ng-if=\"post.content_more\" class=\"post-body\" ng-bind-html=\"post.content_first_part\"></div>\n            \n            <div ng-if=\"post.content_more\" class=\"read-more\">\n                <a href=\"/#!/posts/{{ post.slug }}\" class=\"btn btn-success\" style=\"margin: auto\"><i class=\"fa fa-angle-double-right\"></i> Read more <i class=\"fa fa-angle-double-left\"></i></a>\n            </div>\n\n            <!-- if post do not have content_more -->\n            <div ng-if=\"haveNo(post.content_more)\" class=\"post-body\" ng-bind-html=\"post.content\"></div>\n\n            <div class=\"post-separator\">\n                <div class=\"dots\">\n                    <small><i class=\"fa fa-gear\"></i></small>\n                    <i class=\"fa fa-gear\"></i>\n                    <small><i class=\"fa fa-gear\"></i></small>\n                </div>\n            </div>\n        </article>\n    </div>\n</div>\n\n\n<div class=\"text-center\">\n    <pager ng-show=\"isPageable(totalItems, perPage)\" total-items=\"totalItems\" items-per-page=\"perPage\" max-size=\"maxSize\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pager>\n</div>\n<div class=\"clearfix\"></div>");
$templateCache.put("navbar.html","<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button class=\"navbar-toggle\" type=\"button\" ng-init=\"isCollapsed = true\" ng-click=\"isCollapsed = !isCollapsed\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <div collapse=\"isCollapsed\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"/#!/\"><i class=\"fa fa-laptop fa-lg\"></i></a></li>     \n            </ul>\n            \n            <div class=\"pull-right\">\n                <ul class=\"nav navbar-nav navbar-left\">\n                    <li class=\"dropdown\" ng-repeat=\"category in categories\">\n                        <a ng-hide=\"category.children\" href=\"/#!/categories/{{ category.slug }}\">{{ category.name }}</a>\n                        <a ng-if=\"category.children\" href=\"/#!/categories/{{ category.slug }}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ category.name }}<span ng-if=\"category.children\" class=\"caret\"></span></a>\n                        <ul ng-if=\"category.children\" class=\"dropdown-menu\" role=\"menu\">\n                            <li ng-repeat=\"child in category.children\"><a href=\"/#!/categories/{{ child.slug }}\">{{ child.name }}</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"/#!/pages/who-am-i\">Who am i?</a></li>\n                </ul>\n                <form ng-submit=\"doSearch()\" class=\"navbar-form navbar-right\" role=\"search\">\n                    <div class=\"input-group\">\n                        <input ng-model=\"keyword\" type=\"text\" class=\"form-control\" placeholder=\"Search for a topic...\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n                        </span>\n                    </div><!-- /input-group -->\n                </form>\n            </div>\n            \n        </div><!--/.nav-collapse -->\n    </div>\n</div>");
$templateCache.put("overlay.html","<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Important</h4>\n</div>\n<div class=\"modal-body\">\n    <p ng-bind-html=\"message\"></p>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Close</button>\n</div>");
$templateCache.put("page.html","<div cg-busy=\"myPromise\">\n    <h2 class=\"post-title\">{{ page.title }}</h2>\n    <hr>\n\n    <div class=\"post-body\" ng-bind-html=\"page.content\"></div>\n\n    <div class=\"post-separator\">\n        <div class=\"dots\">\n            <small><i class=\"fa fa-gear\"></i></small>\n            <i class=\"fa fa-gear\"></i>\n            <small><i class=\"fa fa-gear\"></i></small>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("post.html","<div cg-busy=\"myPromise\">\n    <div class=\"post-date\">\n        <i class=\"fa fa-calendar-o\"></i> {{ post.date }}, \n        <i class=\"fa fa-clock-o\"></i> {{ post.time }}\n    </div>\n    <h2 class=\"post-title\">{{ post.title }}</h2>\n    <div class=\"post-terms\">\n        <ul class=\"pull-left\">\n            <li ng-repeat=\"category in post.categories\">\n                <a href=\"/#!/categories/{{ category.slug }}\">\n                    <i class=\"fa fa-folder-o\"></i> {{ category.name }}\n                </a> \n            </li>\n        </ul>\n        <ul class=\"pull-left\">\n            <li ng-repeat=\"tag in post.tags\">\n                <a href=\"/#!/tags/{{ tag.slug }}\">\n                    <i class=\"fa fa-tag\"></i> {{ tag.name }}\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"clearfix\"></div>\n    <hr>\n\n    <div class=\"post-body\" ng-bind-html=\"post.content\"></div>\n\n    <div class=\"post-separator\">\n        <div class=\"dots\">\n            <small><i class=\"fa fa-gear\"></i></small>\n            <i class=\"fa fa-gear\"></i>\n            <small><i class=\"fa fa-gear\"></i></small>\n        </div>\n    </div>\n</div>\n\n<h2>Readers Opinion</h2>\n\n<dir-disqus disqus-shortname=\"cahsowan\"\n    disqus-identifier=\"{{ post.id }}\"\n    disqus-url=\"{{ post.url }}\"\n    ready-to-bind=\"{{ contentLoaded }}\">\n</dir-disqus>\n\n");
$templateCache.put("search.html","<h1>Search for: {{ keyword }}</h1>\n\n<div cg-busy=\"myPromise\">\n    <table class=\"table-posts\">\n        <tr ng-repeat=\"post in posts\">\n            <td class=\"date-column\">{{ post.date }}</td>\n            <td><h3><a href=\"/#!/posts/{{ post.slug }}\">{{ post.title }}</a></h3></td>\n        </tr>\n    </table>\n</div>\n\n<pagination ng-show=\"isPageable(totalItems, perPage)\" total-items=\"totalItems\" items-per-page=\"perPage\" max-size=\"maxSize\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>");
$templateCache.put("tags.html","<h1>Tagged with: {{ tag }}</h1>\n\n<div cg-busy=\"myPromise\">\n    <table class=\"table-posts\">\n        <tr ng-repeat=\"post in posts\">\n            <td class=\"date-column\">{{ post.date }}</td>\n            <td><h3><a href=\"/#!/posts/{{ post.slug }}\">{{ post.title }}</a></h3></td>\n        </tr>\n    </table>\n</div>\n\n<pagination ng-show=\"isPageable(totalItems, perPage)\" total-items=\"totalItems\" items-per-page=\"perPage\" max-size=\"maxSize\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>");
$templateCache.put("widgets/categories-tree.html","<div class=\"categories-tree\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <button class=\"btn btn-default pull-right\"  ng-init=\"listCollapsed = true\" ng-click=\"listCollapsed = !listCollapsed\">\n                <i class=\"fa fa-bars fa-lg\"></i>\n            </button>\n            <h3>Categories</h3>\n        </div>\n\n        <!-- List group -->\n        <div cg-busy=\"myPromise\">\n            <ul class=\"collapse\"  collapse=\"listCollapsed\">\n                <li ng-repeat=\"category in categories\">\n                    <a href=\"/#!/categories/{{ category.slug }}\">\n                        <i class=\"fa fa-folder-open\"></i> {{ category.name }} <span class=\"badge\">{{ category.post_count }}</span>\n                    </a>\n                    <ul ng-if=\"category.children\">\n                        <li ng-repeat=\"child in category.children\">\n                            <a href=\"/#!/categories/{{ child.slug }}\">\n                                <i class=\"fa fa-folder\"></i> {{ child.name }} <span class=\"badge\">{{ child.post_count }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");
$templateCache.put("widgets/popular-tags.html","<div class=\"popular-tags\">\n    <h2>\n        <span class=\"fa-stack\">\n          <i class=\"fa fa-square fa-stack-2x\"></i>\n          <i class=\"fa fa-tags fa-stack-1x fa-inverse\"></i>\n        </span>\n         Popular Tags\n    </h2>\n    <div cg-busy=\"myPromise\">\n      <ul>\n        <li ng-repeat=\"tag in tags\">\n            <a ng-style=\"font-size: {{ tag.font_size }}px\" href=\"/#!/tags/{{ tag.slug }}\" ># {{ tag.name }}</a>\n        </li>\n    </ul>\n    </div>\n</div>");
$templateCache.put("widgets/recent-posts.html","<div class=\"recent-posts\">\n    <h2>\n        <span class=\"fa-stack\">\n          <i class=\"fa fa-square fa-stack-2x\"></i>\n          <i class=\"fa fa-clock-o fa-stack-1x fa-inverse\"></i>\n        </span>\n         Recent Posts\n    </h2>\n    <div cg-busy=\"myPromise\">\n      <ul class=\"fa-ul recent-posts-list\">\n          <li ng-repeat=\"post in recentPosts\">\n              <a href=\"/#!/posts/{{ post.slug }}\">\n                <i class=\"fa-li fa fa-angle-double-right\"></i>{{ post.title }}\n              </a>\n          </li>\n      </ul>\n    </div>\n</div>");}]);