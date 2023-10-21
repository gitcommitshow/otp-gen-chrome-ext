import { KeyUtils } from '../scripts/key-utils.js'

$(document).ready(function() {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        e.clearSelection();
    });

    $("#refresh_button").click(function() {
        if (KeyUtils.getSecret() == null) {
            chrome.runtime.openOptionsPage();
            return;
        }
        KeyUtils.advanceCounter();
        // $("#otp").text(KeyUtils.getOTP());
        $("#otp").text(KeyUtils.getTOTP());
    });

    $("#go-to-options").click(function() {
        chrome.runtime.openOptionsPage();
    });
});