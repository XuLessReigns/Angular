var gulp = require("gulp");
var concat = require("gulp-concat");

var ctrlArr = [
    "app/controllers/controller.header.js",
    "app/controllers/contentController.js",
    "app/controllers/pageManageController.js"
]
gulp.task("concatContrl",function () {
    return gulp.src(ctrlArr)
        .pipe(concat("com.bj.jshop.controllers.js"))
        .pipe(gulp.dest("app/controllers/"));
});
var servArr = [
    "app/services/service.header.js",
    "app/services/contentService.js",
    "app/services/pageManageService.js"
];
gulp.task("servContrl",function(){
    return gulp.src(servArr)
        .pipe(concat("com.bj.jshop.services.js"))
        .pipe(gulp.dest("app/services/"))
})


gulp.task("watch",function(){
    gulp.watch("app/services/**/*",["servContrl"])
    gulp.watch("app/controllers/**/*",["concatContrl"]);
})