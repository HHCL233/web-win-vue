import type { App } from 'vue'
import winbutton from './webwin-button.vue'
import winsidebar from './webwin-sidebar.vue'
import wintile from './webwin-tile.vue'
import wintab from './webwin-tab.vue'
import wininputbox from './webwin-inputbox.vue'
import winpasswordbox from './webwin-passwordbox.vue'
import winricheditbox from './webwin-richeditbox.vue'
import winnotifications from './webwin-notifications.vue'
import wincheckbox from './webwin-checkbox.vue'
import winradio from './webwin-radio.vue'
import wincombobox from './webwin-combobox.vue'
import winprogressbar from './webwin-progressbar.vue'
import wincontentdialog from './webwin-contentdialog.vue'
import wincard from './webwin-card.vue'
import windropdown from './webwin-dropdown.vue'
import wintopappbar from './webwin-topappbar.vue'
import winrange from './webwin-range.vue'
import winlistview from './webwin-listview.vue'
import winlistbox from './webwin-listbox.vue'

export { winrange, wintopappbar, windropdown, wincard, wincontentdialog, winprogressbar, wincombobox, winradio, wincheckbox, winbutton, winsidebar, wintile, wintab, wininputbox, winpasswordbox, winricheditbox, winnotifications, winlistview, winlistbox };

const component = [winrange, wintopappbar, windropdown, wincard, wincontentdialog, winprogressbar, wincombobox, winradio, wincheckbox, winbutton, winsidebar, wintile, wintab, wininputbox, winpasswordbox, winricheditbox, winnotifications, winlistview, winlistbox];

const WebWin = {
    install(App: App) {
        component.forEach((item) => {
            App.component("winbutton", winbutton);
            App.component("winsidebar", winsidebar);
            App.component("wintile", wintile);
            App.component("wintab", wintab);
            App.component("wininputbox", wininputbox);
            App.component("winpasswordbox", winpasswordbox);
            App.component("winricheditbox", winricheditbox);
            App.component("winnotifications", winnotifications);
            App.component("wincheckbox", wincheckbox);
            App.component("winradio", winradio);
            App.component("wincombobox", wincombobox);
            App.component("winprogressbar", winprogressbar);
            App.component("wincontentdialog", wincontentdialog);
            App.component("wincard", wincard);
            App.component("windropdown", windropdown);
            App.component("wintopappbar", wintopappbar);
            App.component("winrange", winrange);
            App.component("winlistview", winlistview);
            App.component("winlistbox", winlistbox);
        });
    },
};

export default WebWin;
