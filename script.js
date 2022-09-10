function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by straight-code)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "./services/index.html", onClick: props.toggleMenu }, "SERVICES")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "https://github.com/sponsors/straight-code", onClick: props.toggleMenu }, "SPONSOR")), /*#__PURE__*/


    
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "straight-code", /*#__PURE__*/

    React.createElement("strong", null, "")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, ""), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "No Stack "), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "2"), " Full Stack")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "./services/index.html" }, "View Services"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

  const About = props => {
    return /*#__PURE__*/(
      React.createElement("section", { id: "about" }, /*#__PURE__*/
      React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
      React.createElement("article", null, /*#__PURE__*/
      React.createElement("div", { className: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "straight-code offers?"), /*#__PURE__*/
      React.createElement("p", { className: "separator" })), /*#__PURE__*/
  
      React.createElement("div", { className: "desc full" }, /*#__PURE__*/
      React.createElement("h4", { className: "subtitle" }, "Need a VPN, Hosting, Storage & More..."), /*#__PURE__*/
      React.createElement("p", null, " straight-code has it all with the best value for services provided!  A OneStopShop for all your needs..."), /*#__PURE__*/
  
  
  
      React.createElement("p", null, "Learn how to code using the courses that we provide, with access to our support team for 24/7 support while having a step by step tutorials while adding loads of tips and tricks for you to take with you in your future of becoming a web developer ")), /*#__PURE__*/
  
  
  
  
  
  
      React.createElement("div", { className: "title" }, /*#__PURE__*/
      React.createElement("h3", null, "Having problems with your code?"), /*#__PURE__*/
      React.createElement("p", { className: "separator" })), /*#__PURE__*/
  

  
  
  
      React.createElement("p", null, "")), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { className: "desc" }, /*#__PURE__*/
      React.createElement("h4", { className: "subtitle" }, ""), /*#__PURE__*/
      React.createElement("p", null, "Let the straight-code team help by choosing a plan we provide that fits your needs if you are unsure on the service you need please do hesitate to contact support with your enquiry."), /*#__PURE__*/
  
  
  
  
  
      React.createElement("p", null, "")))));
  
  
  
  };
  

/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Our Services"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "ALL"), "services we provide. Have a look into our  ",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "docs.straight-code.xyz", target: "_blank", rel: "noopener noreferrer" }, "Docs"), " to a get a full view on the project.")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "VPN",
      img: './assets/comingsoon.png',
      tech: "js css react node",
      link: "https://vpn.straight-code.xyz",
      repo: "https://github.com/straight-code/VPN" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, CSS and React."), /*#__PURE__*/
    React.createElement("p", null, "This is a full-stack website that I made which lets the users use straight-code' VPN")), /*#__PURE__*/
   

    React.createElement(Project, {
      title: "Cloud Storage.",
      img: './assets/comingsoon.png',
      tech: "js css react node",
      link: "https://cloud.straight-code.xyz",
      repo: "https://github.com/straight-code/cloud-frontend" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, CSS and React."), /*#__PURE__*/
    React.createElement("p", null, "This is a full-stack website that I made which lets you get yourself a storage plan.")), /*#__PURE__*/
   

    
    React.createElement(Project, {
      title: "Hosting.",
      img: './assets/comingsoon.png',
      tech: "js css react node",
      link: "https://hosting.straight-code.xyz",
      repo: "https://github.com/straight-code/hosting-frontend" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, CSS and React."), /*#__PURE__*/
    React.createElement("p", null, "This is a full-stack website that I made which lets the users host for next to nothing.")), /*#__PURE__*/
   

    React.createElement(Project, {
      title: "MINT a nft",
      img: './assets/mint.png',
      tech: "js css html react node",
      link: "https://mint.straight-code.xyz",
      repo: "https://github.com/straight-code/" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, CSS and React."), /*#__PURE__*/
    React.createElement("p", null, "This is a full-stack website that I made which lets the users Mint an NFT on the Blockchain")), /*#__PURE__*/
   
    
    React.createElement(Project, {
      title: "Shop",
      img: './assets/shop.png',
      tech: "js css html react node",
      link: "https://shop.straight-code.xyz",
      repo: "https://github.com/straight-code/shop" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, CSS and React."), /*#__PURE__*/
    React.createElement("p", null, "This is a full-stack dapp that I made which lets the users buy items on the blockchain")), /*#__PURE__*/


    React.createElement(Project, {
      title: "courses",
      img: './assets/comingsoon.png',
      tech: "js css html react node",
      link: "https://courses.straight-code.xyz",
      repo: "https://github.com/straight-code/courses-frontend" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, CSS and React."), /*#__PURE__*/
    React.createElement("p", null, "This is a full-stack website that I made which lets the users browse courses that straight-code provides")), /*#__PURE__*/
 
    ))))





};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "help.straight.code", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " straight-code2."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/straight_code28",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/straight-code",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/straight-code",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));