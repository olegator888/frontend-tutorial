import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://357c21379b3b8d88ce8778ab0e6c40df@o4506388433666048.ingest.sentry.io/4506388493697024",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
