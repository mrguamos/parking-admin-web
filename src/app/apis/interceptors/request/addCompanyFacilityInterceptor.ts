import { session } from '@services/session.service';
import { InternalAxiosRequestConfig } from 'axios';

export const addCompanyFacilityInterceptor = (
	config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> => {
	config.headers = config.headers || {};
	const companyFacility = session.getCompanyFacility();
	if (companyFacility) {
		config.headers['WISE-Company-Id'] = companyFacility.companyId;
		config.headers['WISE-Facility-Id'] = companyFacility.facilityId;
	}
	return config;
};
