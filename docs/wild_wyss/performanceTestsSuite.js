import { total } from "../src/kolibri/util/test.js";
import { versionInfo } from "../src/kolibri/version.js";

import "./src/sequence/performanceTest.js"

total.onChange( value => document.getElementById('grossTotal').textContent = "" + value + " tests done.");

document.querySelector("footer").textContent = "Built with Kolibri " + versionInfo;
