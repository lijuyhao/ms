		
			 var gulp= require('gulp');   
             var browserSync =require('browser-sync');
		       

             gulp.task('watch',function(){  
                 browserSync.init({
                 server:'./dist',
                 files:['./dist/1.html']
                  });   
                 gulp.watch(['watch'])//监听文件或者任务，自动跟新执行压缩

               })