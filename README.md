[![GitHub issues](https://img.shields.io/github/issues/Foreveryone-cz/LUI-2.svg)](https://github.com/Foreveryone-cz/LUI-2/issues)
[![GitHub forks](https://img.shields.io/github/forks/Foreveryone-cz/LUI-2.svg)](https://github.com/Foreveryone-cz/LUI-2/network)
[![GitHub stars](https://img.shields.io/github/stars/Foreveryone-cz/LUI-2.svg)](https://github.com/Foreveryone-cz/LUI-2/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Foreveryone-cz/LUI-2/master/LICENSE)

[![GitHub Version](https://img.shields.io/badge/version-2.1.0-lightgrey.svg)](https://github.com/Foreveryone-cz/LUI-2/releases)
[![Bower](https://img.shields.io/bower/v/LUI-2.svg?maxAge=2592000)]()

![lui2 logo](http://less-ui.net/lui2_logo_medium.png)

Front-end framework for fast and easy web development of responsive websites

If you're looking for **older LUI** look here: https://github.com/Foreveryone-cz/LUI

---

Repository for LUI 2.0 development

---

### Installation
- `bower install LUI-2`
- `composer install Foreveryone-cz/LUI-2`
- download or clone manualy

### Using LUI in your project
- import `router.less` in your project less file
- or import your project less file at the end of `router.less`
- *or if you don't want to use anything from LUI in your less files, you can use it as "standalone" package*

### Configuration
- `config.less` is main configuration file. If you use bower or composer to download LUI, you can create your own config and import it in your project less file. Make sure this config is imported after LUI, so it will overwrite default settings. Same applies for component's configs.
- Then each component has its own config. For example button have `button.config.less` which is inside `components/button/` folder. This is to make LUI as modular as possible, so you can remove button folder completely, if you know you wont use it, or you can simply turn all styles off in `button.config.less`. However **grid is required in LUI**, as it's variables are used in other less files (grid breakpoints)


### Features
- Completely **responsive**
- **Flexbox** grid with many options such as horizontal, vertical alignment, extra column sizes and more
- Completely modular. Need grid only? no problem!

### Compatibility
- Android 5 and newer
- iOS 7 and newer
- Mac OS X Mavericks and newer (Safari 7.1)
- Internet Explorer 10 and newer (Internet Explorer 9 with javascript help)

### Supported by

[![Lui 2 logo](http://less-ui.net/browserstack_logo.png)](//browserstack.com)

[![Lui 2 logo](http://less-ui.net/foreveryone_logo.png)](//foreveryone.cz)
