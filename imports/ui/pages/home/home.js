import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/top_nav/top_nav.js';
import '../../components/banner/banner.js';
import '../../components/intro_vid/intro_vid.js';
import '../../components/footer/footer.js';

Template.App_home.onRendered(function() {
	Session.set("currentPage", "home"); // set the current page to change banner
});
