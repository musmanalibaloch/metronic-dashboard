import io from "socket.io-client";

import { socketEvents } from "./events";
import { connectionEmit } from "./emit";

export const socket = io('https://www.api.sabhi.org/');

export const initSockets = ({ setValue }) => {
    socketEvents({ setValue });
    connectionEmit();
};
