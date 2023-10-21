# Basic OTP Token Generator Chrome Extension
A Chrome extension for generating [TOTP]([https://en.wikipedia.org/wiki/HMAC-based_One-time_Password_Algorithm](https://en.wikipedia.org/wiki/Time-based_one-time_password)) tokens for a single secret.

![Popup](/screenshots/ext_popup.png)

**Notice**: This is a working fork of [chipchaderez/otp-gen-chrome-ext](https://github.com/chipchaderez/otp-gen-chrome-ext). The original project does not work as of 2023, because chrome does not support v2 version of extension. Also the original project did not support `TOTP`, rendering it inoperative for 2FA for most applications.

## SETUP
Submit the ~~HOTP~~ TOTP secret key in the options popup:

![Options Popup](/screenshots/ext_options.png)

## USAGE

### POPUP

![Popup](/screenshots/ext_popup_token.png)

* ![Refresh](/screenshots/ext_refresh.png)&nbsp;generate a new token.


* ![Refresh](/screenshots/ext_clippy.png)&nbsp;copy the token to clipboard.

### Context Menu

Use 'Paste OTP Token' right-click menu action to paste a new token into any text-box.

![Context Menu](/screenshots/ext_paste.png)

### Keyboard Shortcuts

Default 'Paste OTP Token' HotKey: <i>Alt+T</i>

(configurable on 'chrome://extensions/configureCommands')

## Notes

* The extension stores locally only the secret and counter required for the HMAC-based One-time Password Algorithm.
* The PIN code should still be manually entered.

## Future Work

* CRUD for multiple tokens.
