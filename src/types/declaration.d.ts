declare module "*.json" {
  const value: any;
  export default value;
}

import NextAuth from "next-auth"

declare module "next-auth" {
    interface User{
        username:string
    }
    interface User {
      role?: string;
    }
  interface Session {
    user: {
      
        image: string | null | undefined;
        name: string | null | undefined;
        id: string | undefined;
        username: ReactNode
        role?: string;
        user:User & {
            username:string
        }
        email:Email &{
          email:string
        }
        password: Password & {
          password:string
        }
        token:{
            username:string
        }
    }
  }
  declare module "next-auth/jwt" {
    interface JWT {
      role?: string;
    }
  }
}