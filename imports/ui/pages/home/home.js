import './home.html';

// import '../../components/demo/hello/hello.js';
// import '../../components/demo/info/info.js';
import '../../components/main-parts/top_nav/top_nav.js';
import '../../components/main-parts/banner/banner.js';
import './intro_vid/intro_vid.js';
import '../../components/main-parts/footer/footer.js';

Template.App_home.onRendered(function() {
	Session.set("currentPage", "finalHome"); // set the current page to change banner
});