import HttpFactory from "~/repository/factory";
import {IBusinessInfo, IMenu} from "~/repository/models/ApiResponse";
import {IMenuDetail} from "~/repository/models/ApiResponse";
import {IApiResponse} from "~/repository/models/appData";
import {ICreateMenu, ICreateCategory} from "~/repository/models/inputModels";
import {Iitem} from "~/repository/models/ApiResponse";

class ItemModule extends HttpFactory {
    private RESOURCE = '/item';

    // 'https://api.dynomenu.com/menu/ab7c92d5-1a13-4012-a57a-99e9cb465d83/detailed' \


    async updateItem(itemId: string, request: Iitem): Promise<IApiResponse<Iitem>> {
        return await this.call<IApiResponse<Iitem>>('PUT', `${this.RESOURCE}/${itemId}`, request);
    }




    async create(request: ICreateMenu) {
        return await this.call<ICreateMenu>('POST', `${this.RESOURCE}`, request);
    }

    async getMenusByBusinessId(id: string) {
        return await this.call<IMenu>('GET', `${this.RESOURCE}/${id}`)
    }


    async getMenusDetailsById(id: string): Promise<IApiResponse<IMenuDetail>> {
        return await this.call<IApiResponse<IMenuDetail>>('GET', `${this.RESOURCE}/${id}/detailed`)
    }

    async createCategoryUnderMenu(request: ICreateCategory, menuId: string) {
        return await this.call<ICreateCategory>('POST', `${this.RESOURCE}/${menuId}/category`, request);
    }


}

export default ItemModule;
