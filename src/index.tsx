import * as _ from 'lodash';

import App from "./components/App";
import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Services from "./services/Services";

ReactDOM.render(<App services={new Services()}/>, document.body)
