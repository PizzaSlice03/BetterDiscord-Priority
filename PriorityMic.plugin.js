//META
// @name         Priority Mic
// @description  Give priority to built-in microphone.
// @author       22ra
// @version      0.0.1
// @source       https://github.com/PizzaSlice03/BetterDiscord-Priority
// @updateURL    https://github.com/PizzaSlice03/BetterDiscord-Priority/releases
// @downloadURL  https://github.com/PizzaSlice03/BetterDiscord-Priority/releases/tag/discord
// @invite       https://discord.gg/7xjbrzS6eG
// @authorId     1276403587689480294
// @supportURL   https://discord.gg/7xjbrzS6eG
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
