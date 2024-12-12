//META
// @name         Priority Mic
// @description  Give priority to built-in microphone.
// @author       22ra
// @version      0.0.1
// @source       https://github.com/PizzaSlice03/BetterDiscord-Priority
// @updateURL    https://your-update-link
// @downloadURL  https://your-download-link
// @website      https://your-website
// @invite       your-invite-link
// @authorId     your-author-id
// @supportURL   https://your-support-link
//META

(async () => {
    const { Plugin } = require('betterdiscord');

    class PriorityMic extends Plugin {
        start() {
            this.checkMic();
        }

        checkMic() {
            // Logic to check and set the built-in mic as priority
            navigator.mediaDevices.enumerateDevices().then(devices => {
                devices.forEach(device => {
                    if (device.kind === 'audioinput' && device.label.includes('Built-in')) {
                        // Set this device as the priority mic
                        this.setPriorityMic(device.deviceId);
                    }
                });
            });
        }

        setPriorityMic(deviceId) {
            // Logic to set the microphone as priority
            // This part is highly dependent on Discord's internal API
            // and may not be possible due to restrictions.
        }

        stop() {
            // Cleanup if necessary
        }
    }

    return new PriorityMic();
})();
