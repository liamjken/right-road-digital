const createFooterPHP = () => {

    const footerPhpContent = `
    <?php
    /**
     * BogRoadTheme
     *
     * @package BogRoadTheme
     */
    ?>
    
    <?php /* "Just what do you think you're doing Dave?" */ ?>
    
        <?php wp_footer(); ?>
    </body>
    </html>
    
      `;

    return footerPhpContent;

}

module.exports = createFooterPHP;