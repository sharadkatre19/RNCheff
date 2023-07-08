export type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
};

export type AuthData = {
    token: string;
};

export enum UserRoles {
    LoggedInUser = 'loggedInUser',
    NonLoggedInUser = 'nonLoggedInUser',
    Chef = 'chef',
    Dietician = 'dietician',
    SuperAdmin = 'superAdmin',
}

export interface Recipe {
    name: string
    ingredients: Ingredient[]
    steps: string[]
    timers: number[]
    imageURL: string
    originalURL?: string
  }
  
  export interface Ingredient {
    quantity: string
    name: string
    type: string
  }