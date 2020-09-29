
/*==============================================================================*/
/* OGLinks News UI Test */
/*==============================================================================*/


var home  = "https://www.oglinks.news";
var explore =  "https://oglinks.news/explore_now";
var pricing = "https://oglinks.news/subscriptions";
var register = "https://oglinks.news/amember/signup";
var login = "https://oglinks.news/amember/login";
var article = "https://oglinks.news/article/26a0a5/update-prices-rise-as-markets-eye-production-cuts";
var subscribers = "http://www.google.com.sg"


var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1280, height: 703};


// Test 1 - Home
casper.start(home, function() {
    var count = $('.headline h2').length;

    //assert
    this.test.assertHttpStatus(200, "Home Loaded");
    this.test.assertTitle("O&GLinks – Personalized Oil & Gas Newsfeed and Search Engine", "Home Title expected");
    this.test.assertExists("form input[name='query']", "Search Active");
    this.test.assertExists(".fa.fa-key", "Login");
    this.test.assertEquals(((".headline h2").length), 12, "6 Newsblocks");
    this.test.assertEquals(((".headline h2").length), 12, "6 Newsblocks");
    this.test.assertExists("form .input-group-btn button", "Trial Button 1");
    this.test.assertElementCount(".headline h2, 1");
    casper.echo("Casper CLI passed args:");
    this.test.assertExists(x("//*[contains(text(), \'Latest O&G News\')]"));
    this.test.assertExists(x("//*[contains(text(), \'Upstream News\')]"));
    this.test.assertExists(x("//*[contains(text(), \'Downstream News\')]"));
    this.test.assertExists(x("//*[contains(text(), \'Europe\')]"));
    this.test.assertExists(x("//a[normalize-space(text())='30 Days Free Trial']"), "Trial Button Active");
    /*
     Home Page
     - Login & Register Button
     - Search Box
     - Banner Button
     - Newsblock (6x)
     - Begin Now Button
     - Feature List
     - Free Trial Button
     */
});

// Test 2 - Explore
casper.thenOpen(explore, function() {
    // asserts
    this.test.assertHttpStatus(200, "EXPLORE PAGE - Loaded successfully.");
    this.test.assertExist('.search-open', "Search Box Loaded");
    this.test.assertExists(x("//a[normalize-space(text())='Get Started']"), "Get Started");



    /*
    - Login & Register Button
    - Search Box
    - Video
    - Get Started Button
     - Chat Support
     */

});

// Test 3 - Subscription
casper.thenOpen(pricing, function() {
    // asserts
     this.test.assertHttpStatus(200, "SUBCRIPTION PAGE - Loaded successfully.");
     this.test.assertExist('.search-open', "Search Box Loaded");
     this.test.assertExists(x("//a[normalize-space(text())='$15.00/month']"), "Pricing 1");
     this.test.assertExists(x("//a[normalize-space(text())='$79.00 for 6 months ($13.17/month)']"), "Pricing 2");
     this.test.assertExists(x("//a[normalize-space(text())='$149.00 for 1 year ($12.42/month)']"), "Pricing 3");

    /*
    - Login & Register Button
     - Search Box
     - Pricing Box
     - Price Drop-down
     - Google Form
     - Chat Support
     */

});


// Test 4 - Registration
casper.thenOpen(register, function() {
    // asserts
    this.test.assertHttpStatus(200, "REGISTRATION PAGE - Loaded successfully.");
    this.test.assertExists("form#page-0 input[name='name_f']", "First Name");
    this.test.assertExists("form#page-0 input[name='name_l']", "Last Name");
    this.test.assertExists("form#page-0 input[name='email']", "Email");
    this.test.assertExists("form#page-0 input[name='pass']", "Password");
    this.test.assertExists("#row-pass-0 .element", "Country");
    this.test.assertExists("form#page-0 input[name='i_agree']", "Terms & Condition");
    this.test.assertExists("form#page-0 input[type=submit][value='Next']", "Next/Page 2 Button");
    this.test.assertExist('.search-open', "Search Box Loaded");

    /*
     https://oglinks.news/amember/signup
     - Register Form
        - Full Name
        - Last Name
        - Email
        - Password
        - Country
        - Terms
        - Next

        Confirmation Link: https://oglinks.news/amember/signup?_qf_EmailCode_display=true

     */
});

// Test 5 - Login
casper.thenOpen(login, function() {
    // asserts
    this.test.assertHttpStatus(200, "LOGIN PAGE - Loaded successfully.");
    this.test.assertExists("form[name=login] input[name='amember_login']", "Username");
    this.sendKeys("input[name='amember_login']", "premium");
    this.sendKeys("input[name='amember_pass']", "premium");
    this.test.assertExists("input[name='amember_pass']", "pass");
    /*
    - Login & Sign-up Form
    - Search Box
    - Banner / Feature List
    - Login Form
        - Email
        - Password
        - Login Button
        - Forgot Password
     */


});

// Test 6 - Article
casper.thenOpen(article, function() {
    // asserts
    this.test.assertHttpStatus(200, "ARTICLE - Loaded successfully.");
    this.test.assertExist('.search-open', "Search Box Loaded");
    this.test.assertExist('.panel h2', "Related News Loaded");
    /*
     https://oglinks.news/article/269915/oil-prices-rise-as-markets-eye-production-cuts

     - Login & Register Icon
     - Social Media Buttons
     - Article Body
     - Related Press Releases
     - Related News
     - Same Articles

     */

});

// Test 7 - Logged
casper.thenOpen(subscribers, function() {
    // asserts
    this.test.assertHttpStatus(200, "SUBSCRIBERS PAGE - Loaded successfully.");
    /*
     **Premium News
     - 10 Newlines
     - Load More
     https://oglinks.news/my/profile
     - My Profile Block
     -- Fullname
     -- Country
     -- Email
     -- Password
     https://oglinks.news/my/subscription
     -- Home
     -- Payment History
     -- Upgrade Subscriptions
     -- Logout
     -- Active Subscription Date
     https://oglinks.news/my/support
     -- Submit Ticket Button

     https://oglinks.news/newsboard
     Personalized Button - https://oglinks.news/personalize
     --  Industry Sectors
     -- Country
     -- Region
     -- Other Selections
     -- Companies
     -- Search
     Save
     Help
     */


});


casper.run(function() {
    this.test.done();
});









