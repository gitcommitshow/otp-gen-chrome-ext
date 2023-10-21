export function KeyUtils() {
}

KeyUtils.getSecret = function() {
    return localStorage.getItem("secret");
};

KeyUtils.getCounter = function() {
    return localStorage.getItem("counter");
};

KeyUtils.advanceCounter = function() {
    return localStorage.setItem("counter", parseInt(KeyUtils.getCounter()) + 1);
};

KeyUtils.getOTP = function() {
    return hotp(KeyUtils.getSecret(), KeyUtils.getCounter(), "dec6");
};

KeyUtils.getTimeInterval = function(){
    const currentTime = Math.floor(new Date().getTime() / 1000 / 30); // 30-second intervals
    return currentTime;
}

KeyUtils.getTOTP = function() {
    return hotp(KeyUtils.getSecret(), KeyUtils.getTimeInterval(), "dec6");
};


