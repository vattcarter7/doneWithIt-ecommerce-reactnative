import Bugsnag from '@bugsnag/expo';

// Log the error to bugsnag
const log = (error) => Bugsnag.notify(error);

const start = () => Bugsnag.start();

export default { log, start };
