import { AxiosError } from 'axios';
import ResponseError from 'scr/utils/errors/ResponseError';

import request from '../request';

export default class AuthApi {
  static login = async (credentials: CredentialType): Promise<string> => {
    try {
      const { data } = await request.post<string>('/login', credentials);
      return data;
    } catch (error) {
      throw new ResponseError(error as AxiosError);
    }
  };
}
