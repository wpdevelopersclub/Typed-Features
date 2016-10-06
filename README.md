# Typed Features Plugin

This plugin types out the messages for a newsfeed style container.  It is an addon for [Fulcrum](https://github.com/hellofromtonya/Fulcrum).
	 	
## How to Use It

This plugin adds two new shortcodes.  Here's how you use it:

```
[typed_features]
[typed_feature_item url="#wpdc-core" message="Help one another with code"]
[typed_feature_item url="#wpdc-core" message="Share your insights"]
[typed_feature_item url="#wpdc-core" message="Promote your gigs"]
[typed_feature_item url="#wpdc-core" message="Learn. Help. Grow."]
[/typed_features]
```

The `[typed_features]` shortcode is the container.  Then each item that you want to type out is placed within the `[typed_feature_item]` shortcode.  Simply specify the message that you want to send.  If you want that message to be clickable, then specifcy the URL for it.

## Installation

1. Install the [Fulcrum](https://github.com/hellofromtonya/Fulcrum), the central custom repository plugin for WordPress.
2. Then you can install this plugin.

Installation from GitHub is as simple as cloning the repo onto your local machine.  To clone the repo, do the following:

1. Using PhpStorm, open your project and navigate to `wp-content/plugins/`. (Or open terminal and navigate there).
2. Then type: `git clone https://github.com/wpdevelopersclub/Typed-Features.git`.

## Configuration
Everything is configurable using the configuration files found in the `config` folder.

## Contributions

All feedback, bug reports, and pull requests are welcome.