# Web Monetization

Web Monetization is a browser API which allows a website to make money without using ads and without requiring any user interaction. 
The user signs up to a Web Monetization Provider like Coil, and the provider sends micropayments to Web Monetized websites whenever the user visits them.

# Micropayment Counter

Web Monetization lets you count exactly how much you made from a given visitor. The amount updates in real-time as more micropayments come in. 
Like any animated effect it should be used sparingly, but it can be a cool way to show your visitors exactly how much they're supporting you!

This example shows how to use the `monetizationprogress` event to count how much you've made off of micropayments from a given visitor.

### ← index.html

The `monetization` meta tag contains a payment pointer, which is the digital wallet address to send micropayments to.

To see the "View as Web Monetized visitor" button, you **must** view the page in an iframe, not in a new window.

### ← counter.js

Fires `monetizationprogress` every time there's a micropayment from the the Web Monetization provider to the site. Updates the text on the page with the new total. 
The amount is written to the `total` span on the page.

### ← wm-previewer.js

Simulates Web Monetization and adds the "View as Web Monetized visitor" button to `index.html`. This script only activates in iframe.

# Additional References

If you're viewing this outside of webmonetization.org, you can find more information here:

* [Webmonetization.org](https://webmonetization.org)
* [Micropayment Counter doc on webmonetization.org](https://webmonetization.org/docs/counter)