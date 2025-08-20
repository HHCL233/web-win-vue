import type { App } from 'vue'
import winbutton from './webwin-button.vue'
import winitem from './webwin-item.vue'
import wintile from './webwin-tile.vue'
import wintab from './webwin-tab.vue'
import wininputbox from './webwin-inputbox.vue'
import winpasswordbox from './webwin-passwordbox.vue'
import winricheditbox from './webwin-richeditbox.vue'
import winnotifications from './webwin-notifications.vue'

export { winbutton, winitem, wintile, wintab, wininputbox, winpasswordbox, winricheditbox, winnotifications };

const component = [winbutton, winitem, wintile, wintab, wininputbox, winpasswordbox, winricheditbox, winnotifications];

const WebWin = {
	install(App:App) {
		component.forEach((item) => {
			App.component("winbutton", winbutton);
            App.component("winitem", winitem);
            App.component("wintile", wintile);
            App.component("wintab", wintab);
            App.component("wininputbox", wininputbox);
            App.component("winpasswordbox", winpasswordbox);
            App.component("winricheditbox", winricheditbox);
            App.component("winnotifications", winnotifications);
		});
	},
};

export default WebWin;
