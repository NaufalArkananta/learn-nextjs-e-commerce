import { login } from "@/lib/firebase/servises";
import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.REVALIDATE_TOKEN,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'Email'},
                password: {label: 'password', type: 'password'},
            },

            async authorize(credentials) {
                const {email, password} = credentials as {
                    email: string
                    password: string
                }
                const user: any = await login({email})
                if(user) {
                    const passwordConfirm = await compare(password, user.password)
                    if(passwordConfirm) {
                        return user
                    }
                    return null
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user,}: any) {
            if(account?.provider === "credentials") {
                token.email = user.email
                token.fullname = user.fullname
                token.role = user.role
            }
            return token
        },
        async session({session, token}: any) {
            if("email" in token) {
                session.user.email = token.email
            }
            if("fullname" in token) {
                session.user.fullname = token.fullname
            }
            if("role" in token) {
                session.user.role = token.role
            }
            return session
        }
    },
    pages: {
        signIn: "/login",
    }
}

const handler = NextAuth(authOptions)

export {    
    handler as GET, handler as POST
}