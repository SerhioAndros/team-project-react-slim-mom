import { defaultModules, defaults, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";

import "@pnotify/core/dist/Material.css";

defaults.styling = "material";
defaults.mode = "light";
defaults.shadow = true;
defaults.closerHover = true;
defaults.delay = 3000;
defaultModules.set(PNotifyMobile, {});

function NotificationError(message) {
  return error({
    text: message,
    addClass: "material",
  });
}

export default NotificationError;
