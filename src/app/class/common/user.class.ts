export class User {
  private authenticated: boolean;
  private userData: any;
  private accessToken: string;
  private idToken: string;
  private configId?: string;
  private errorMessage?: string;

  constructor(
    isAuthenticated?: boolean,
    userData?: any,
    accessToken?: string,
    idToken?: string,
    configId?: string,
    errorMessage?: string
  ) {
    this.authenticated = isAuthenticated || false;
    this.userData = userData || '';
    this.accessToken = accessToken || '';
    this.idToken = idToken || '';
    this.configId = configId;
    this.errorMessage = errorMessage;
  }

  public getIsAuthenticated(): boolean {
    return this.authenticated;
  }

  public setIsAuthenticated(value: boolean): void {
    this.authenticated = value;
  }

  public getUserData(): any {
    return this.userData;
  }

  public setUserData(value: any): void {
    this.userData = value;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public setAccessToken(value: string): void {
    this.accessToken = value;
  }

  public getIdToken(): string {
    return this.idToken;
  }

  public setIdToken(value: string): void {
    this.idToken = value;
  }

  public getConfigId(): string | undefined {
    return this.configId;
  }

  public setConfigId(value?: string): void {
    this.configId = value;
  }

  public getErrorMessage(): string | undefined {
    return this.errorMessage;
  }

  public setErrorMessage(value?: string): void {
    this.errorMessage = value;
  }
}
