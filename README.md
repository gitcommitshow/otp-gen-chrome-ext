# Basic OTP Token Generator Chrome Extension
A Chrome extension for generating [TOTP]([https://en.wikipedia.org/wiki/HMAC-based_One-time_Password_Algorithm](https://en.wikipedia.org/wiki/Time-based_one-time_password)) tokens for a single secret.

![Popup](/screenshots/ext_popup.png)

**Notice**: This is a working fork of [chipchaderez/otp-gen-chrome-ext](https://github.com/chipchaderez/otp-gen-chrome-ext). The original project does not work as of 2023, because chrome does not support v2 version of extension. Also the original project did not support `TOTP`, rendering it inoperative for 2FA for most applications.

## How 2FA works

1. The authenticating application shares a secret code at the time of 2FA setup
2. The setup is completed by verifying a TOTP generated using this secret code
3. The OTP generator stores the secret to create OTPs in future, the authenticating app also stores the code to verify the OTP
4. When asked for OTP again in future(usually for 2FA at the time of login), the OTP generator creates a new OTP using the same secret and authenticating application verifies it. Match confirms that the user owns that secret code.

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
