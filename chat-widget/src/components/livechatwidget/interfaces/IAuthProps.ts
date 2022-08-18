export interface IAuthProps {
    authClientFunction?: string;
    setAuthTokenProviderToChatSdk: (chatSDK: any, authClientFunction?: string) => Promise<void>;
}