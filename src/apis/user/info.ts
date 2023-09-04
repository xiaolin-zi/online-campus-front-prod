import { userRequest } from '@/utils/request';

export const uploadAvatarApi = (avatar: any) => {
  return userRequest({
    method: 'post',
    url: '/user/updateAvatar',
    params: { avatar }
  });
}