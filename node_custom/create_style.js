const createThemeStyle = (version) => {

    const StyleContent = `
    /*
Theme Name: Bog Road Theme
Theme URI: https://www.rightroaddigital.com/
Author: Liam Kennedy
Author URI: https://www.rightroaddigital.com/
Description: A Theme that sets the front end to vuejs but still connects to WP in a meaningful way.
Version: ${version}.0
Requires at least: 5.9
Tested up to: 6.0.2
Requires PHP: 8.0
text domain: bogroadtheme
*/

p {
    padding-top: 10px;
    padding-bottom: 10px;
}

.wp-block-heading{
    padding-top: 5px;
}

.wp-block-code {
   background-color:#d9d9d9; 
}

h1, h2, h3, h4{
    color: #48742C;
    }
    
    a {
        color: #48742C;
        text-decoration: underline;
    }
      `;

    return StyleContent;

}

module.exports = createThemeStyle;