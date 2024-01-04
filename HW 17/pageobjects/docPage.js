import { BaseElements } from "../helpers/baseElements.js";

class DocPage extends BaseElements {
    constructor() {
        super()
    }

    get docPageTitle() {
        return $('//h1');
    }

}

export default new DocPage();