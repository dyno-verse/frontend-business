import HttpFactory from "~/repository/factory";
import {IBusinessInfo} from "~/repository/models/ApiResponse";
import {IApiResponse} from "~/repository/models/appData";
import {IUpdateBusiness} from "~/repository/models/inputModels";

class BusinessModule extends HttpFactory {
    private RESOURCE = 'business';

    async getBusinessInfoBySlug(slug: string): Promise<IBusinessInfo> {
        return await this.call<IBusinessInfo>('GET', `${this.RESOURCE}/slug/${slug}`)
    }

    async getBusinessInfoById(id: string): Promise<IApiResponse<IBusinessInfo>> {
        return await this.call<IApiResponse<IBusinessInfo>>('GET', `${this.RESOURCE}/${id}`)
    }

    async updateBusinessInfoById(id: string, data: IUpdateBusiness): Promise<IApiResponse<IBusinessInfo>> {
        return await this.call<IApiResponse<IBusinessInfo>>('PUT', `${this.RESOURCE}/${id}`, data)
    }
}

export default BusinessModule;
