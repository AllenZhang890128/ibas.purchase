/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { PurchaseOrderListApp } from "./PurchaseOrderListApp";

export class PurchaseOrderFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "7cdd0938-8d7a-42d9-be44-749ac85109a0";
    /** 功能名称 */
    static FUNCTION_NAME = "purchase_func_purchaseorder";
    /** 构造函数 */
    constructor() {
        super();
        this.id = PurchaseOrderFunc.FUNCTION_ID;
        this.name = PurchaseOrderFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: PurchaseOrderListApp = new PurchaseOrderListApp();
        app.navigation = this.navigation;
        return app;
    }
}
